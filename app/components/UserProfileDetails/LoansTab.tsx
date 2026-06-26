import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface LoansTabProps {
  user: User;
}

export const LoansTab = ({ user }: LoansTabProps) => {
  if (!user.loans) return null;

  return (
    <div className={styles.section}>
      <h3>Loans Summary</h3>
      <div style={{ overflowX: 'auto', marginTop: '15px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(33, 63, 125, 0.1)', textAlign: 'left' }}>
              <th style={{ padding: '12px 8px', color: '#545F7D', fontSize: '12px', fontWeight: 600 }}>LOAN ID</th>
              <th style={{ padding: '12px 8px', color: '#545F7D', fontSize: '12px', fontWeight: 600 }}>AMOUNT</th>
              <th style={{ padding: '12px 8px', color: '#545F7D', fontSize: '12px', fontWeight: 600 }}>TENURE</th>
              <th style={{ padding: '12px 8px', color: '#545F7D', fontSize: '12px', fontWeight: 600 }}>DATE APPLIED</th>
              <th style={{ padding: '12px 8px', color: '#545F7D', fontSize: '12px', fontWeight: 600 }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {user.loans.map((loan: any) => (
              <tr key={loan.id} style={{ borderBottom: '1px solid rgba(33, 63, 125, 0.05)' }}>
                <td style={{ padding: '12px 8px', fontSize: '14px', color: '#545F7D' }}>{loan.id}</td>
                <td style={{ padding: '12px 8px', fontSize: '14px', color: '#545F7D', fontWeight: 600 }}>₦{loan.amount.toLocaleString()}</td>
                <td style={{ padding: '12px 8px', fontSize: '14px', color: '#545F7D' }}>{loan.tenure}</td>
                <td style={{ padding: '12px 8px', fontSize: '14px', color: '#545F7D' }}>{loan.dateApplied}</td>
                <td style={{ padding: '12px 8px', fontSize: '14px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    backgroundColor: loan.status === 'Active' ? 'rgba(57, 205, 98, 0.06)' : 'rgba(84, 95, 125, 0.06)',
                    color: loan.status === 'Active' ? '#39CD62' : '#545F7D'
                  }}>
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
