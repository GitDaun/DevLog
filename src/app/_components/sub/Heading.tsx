const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="sm:text-3xl text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors">
      {text}
    </h1>
  )
}

export default Heading
