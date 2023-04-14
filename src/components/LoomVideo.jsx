export function LoomVideo({ source }) {
  return (
    <div className="relative aspect-video py-4">
      <iframe
        src={source}
        frameBorder="0"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      ></iframe>
    </div>
  )
}
