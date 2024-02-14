import Wrapper from "@/components/wrapper/Wrapper"
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
  title: 'Internshala Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
