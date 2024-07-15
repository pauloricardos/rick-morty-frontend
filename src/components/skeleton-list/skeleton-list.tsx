import './styles.css';

export const SkeletonList = () => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-line-1"></div>
            <div className="skeleton-line skeleton-line-2"></div>
            <div className="skeleton-line skeleton-line-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
