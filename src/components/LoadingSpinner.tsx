interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner = ({ message }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-8">
      {/* Primary spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 rounded-full border-4 border-t-foreground border-r-foreground border-b-input border-l-gray-input animate-spin" />
        <div className="absolute w-16 h-16 rounded-full border-4 border-t-transparent border-r-transparent border-b-card border-l-card  animate-pulse" />
      </div>

      {/* Secondary loading indicators */}
      <div className="flex space-x-2 ">
        <div
          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>

      {/* Loading text */}
      <div className="text-foreground font-medium animate-pulse">{message}</div>
    </div>
  );
};

export default LoadingSpinner;
