import styles from './comingSoon.module.scss';
import { Icon } from '../../components/Icons';

export default async function ComingSoonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';

  // Format slug for display (e.g. "loan-products" -> "Loan Products")
  const title = slug
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Icon name="file" width={64} height={64} />
        <h1>{title}</h1>
        <p>This module is currently under construction. Check back soon!</p>
      </div>
    </div>
  );
}
