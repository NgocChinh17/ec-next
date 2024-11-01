import Footer from "@/components/footer/footer"
import "./globals.css"
import "../styles/index.css"
import Header from "@/components/header/header"
import SliderHeader from "@/components/sliderHeader/sliderHeader" // Ensure the correct path

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SliderHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
