export default function LoadingSpinner() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}