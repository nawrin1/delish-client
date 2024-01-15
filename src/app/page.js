import Banner from '@/components/ui/Banner'
import ingredients from '../../ingredients.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* <h1 className="text-4xl font-bold text-center">Recipe app</h1> */}
      <Banner></Banner>
    </main>
  )
}
