class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Terjadi kesalahan</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-3 bg-indigo-600 text-white rounded-lg">
              Muat Ulang
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [activeTab, setActiveTab] = React.useState('chat');

    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <ChatInterface activeTab={activeTab} />
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);