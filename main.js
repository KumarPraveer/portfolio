function command(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      display(help);
      break;
    case "whois":
      display(whois);
      break;
    case "projects":
      display(projects);
      break;
    case "social":
      display(social);
      break;
    case "hobby":
      display(hobby);
      break;
    case "contact":
      display(contact);
      break;
    case "whoami":
      display(whoami);
      break;
    case "funda":
      display(funda);
      break;
    case "clear":
      clearScreen();
      break;
    default:
      display(wrongInput);
  }
}

// Function to display array content
const messageContainer = document.querySelector("#messageContainer");
display(welcomeMessage);

let clearScreen = () => {
  messageContainer.textContent = "";
};

function display(arr) {
  arr.forEach((line) => {
    if (line === "<br>") {
      // Create a line break for "<br>"
      const br = document.createElement("br");
      messageContainer.appendChild(br);
    } else if (line.includes('<a href="')) {
      // Extract the URL and link text from the line
      const linkElement = document.createElement("div");
      const aTag = document.createElement("a");

      // Use regex to extract the URL and the display text from the string
      const urlMatch = line.match(/href="([^"]*)"/);
      const textMatch = line.match(/>([^<]*)</);

      if (urlMatch && textMatch) {
        aTag.href = urlMatch[1]; // Set the href attribute
        aTag.textContent = textMatch[1]; // Set the visible text
        aTag.target = "_blank"; // Ensure the link opens in a new tab
        linkElement.appendChild(aTag); // Append the <a> tag to the div
      }

      messageContainer.appendChild(linkElement);
    } else {
      // Create a div for normal lines
      const div = document.createElement("div");
      div.classList.add("message");
      div.textContent = line;
      messageContainer.appendChild(div);
    }
    messageContainer.lastElementChild.scrollIntoView({ behavior: "smooth" });
  });
}
