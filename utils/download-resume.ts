export function downloadResume() {
  // In a real implementation, this would be the path to your actual resume file
  const resumeUrl = "/Malshan_Dissanayaka_Resume.pdf"

  // Create an anchor element and trigger the download
  const link = document.createElement("a")
  link.href = resumeUrl
  link.download = "Malshan_Dissanayaka_Resume.pdf"
  link.target = "_blank"

  // For browsers that require the element to be in the DOM
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Return a message for confirmation
  return "Downloading resume..."
}
