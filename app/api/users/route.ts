import { NextResponse } from 'next/server';
import db from './db.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const search = searchParams.get('search') || '';

  // Advanced filters
  const org = searchParams.get('org') || '';
  const username = searchParams.get('username') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const date = searchParams.get('date') || '';
  const status = searchParams.get('status') || '';

  let filteredUsers = db;

  // Apply general search
  if (search) {
    const query = search.toLowerCase();
    filteredUsers = filteredUsers.filter((u) => 
      u.username.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.phoneNumber.toLowerCase().includes(query) ||
      u.organization.toLowerCase().includes(query)
    );
  }

  // Apply advanced filters
  if (org) {
    filteredUsers = filteredUsers.filter(u => u.organization.toLowerCase() === org.toLowerCase());
  }
  if (username) {
    filteredUsers = filteredUsers.filter(u => u.username.toLowerCase().includes(username.toLowerCase()));
  }
  if (email) {
    filteredUsers = filteredUsers.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
  }
  if (phone) {
    filteredUsers = filteredUsers.filter(u => u.phoneNumber.includes(phone));
  }
  if (date) {
    filteredUsers = filteredUsers.filter(u => u.dateJoined.startsWith(date));
  }
  if (status) {
    filteredUsers = filteredUsers.filter(u => u.status.toLowerCase() === status.toLowerCase());
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const users = filteredUsers.slice(startIndex, endIndex);

  return NextResponse.json({
    data: users,
    meta: {
      total: filteredUsers.length,
      page,
      limit,
      totalPages: Math.ceil(filteredUsers.length / limit)
    },
    stats: {
      totalUsers: filteredUsers.length,
      activeUsers: filteredUsers.filter(u => u.status.toLowerCase() === 'active').length,
      usersWithLoans: filteredUsers.filter(u => u.loans && u.loans.length > 0).length,
      usersWithSavings: filteredUsers.filter(u => u.savings && u.savings.accountBalance > 0).length
    }
  });
}
