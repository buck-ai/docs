import Image from 'next/image'

export function InlineImage({ source }) {
  return (
    <div className="relative aspect-video py-4">
      <Image src={source} />
    </div>
  )
}
