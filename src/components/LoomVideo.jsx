export function LoomVideo({ source }) {
  return (
    <div className="relative aspect-video py-4">
      <iframe src={source} frameborder="0" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
    </div>
  )
}