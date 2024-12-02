import '@styles/loading.css';

const LoadingSpinner = () => (
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  );
  
  export default LoadingSpinner;
  