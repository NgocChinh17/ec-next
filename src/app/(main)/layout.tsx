import { PropsWithChildren } from "react"

import SliderHeader from "@/components/sliderHeader/sliderHeader" // Ensure the correct path

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"

import "../globals.css"
import "../../styles/index.css"

export default function RootLayout({
  children,
}: // eslint-disable-next-line @typescript-eslint/no-empty-object-type
PropsWithChildren<{}>) {
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
