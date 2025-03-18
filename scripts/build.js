const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const distDir = path.resolve(__dirname, "dist")
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

const slidesDir = path.resolve(__dirname, "slides")
const slides = fs.readdirSync(slidesDir)

const repoName = path.basename(process.cwd())

slides.forEach((slide) => {
  const slidePath = `./slides/${slide}`
  console.log(`Building ${slide}...`)
  execSync(
    `pnpm --filter "${slidePath}" run build --base "/${repoName}/${slide}" -o "../../dist/${slide}"`,
    {
      stdio: "inherit"
    }
  )

  // add 404.html to the root of slide directory
  // and add a redirect to the slide
  // example /talks/1 will redirect to /talks

  const slideDistPath = path.join(distDir, slide)
  const redirectHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta http-equiv="refresh" content="0; url='/${repoName}/${slide}'" />
    </head>
    <body>
      <p>Redirecting to <a href="/${repoName}/${slide}">/${repoName}/${slide}</a>...</p>
    </body>
    </html>
  `

  fs.writeFileSync(path.join(slideDistPath, "404.html"), redirectHTML)
  console.log(`Added 404.html for ${slide}`)
})
