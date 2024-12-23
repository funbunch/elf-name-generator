const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];

const elfDisplay = document.querySelector('#elf-name-display')
const elfEmployees = document.querySelector('#elf-names-list li' )
const generateBtn = document.querySelector('.generate-btn')

function getNames() {
  const fname = document.getElementById('fname').value.charAt(0)
  const lname = document.getElementById('lname').value.charAt(0)
  const displayElfFirst = elfFirstNames.find(char => char[0] === fname) || ''
  const displayElfLast = elfLastNames.find(char => char[0] === lname) || ''
  
  elfDisplay.textContent = `${displayElfFirst} ${displayElfLast}`

  if (!fname || !lname) {
    elfDisplay.textContent = "Please enter valid names!";
  }
  
  // Create a new li element and append it to the list
  //check duplicasts first
  let isDuplicate = false;
  let newElfName = `${displayElfFirst} ${displayElfLast}`

  for (const li of elfEmployees.querySelectorAll('li')) {
    if (li.textContent === newElfName) {
      isDuplicate = true
      break
    }
  }

  if (!isDuplicate) {
    if (displayElfFirst && displayElfLast) {
      const newLi = document.createElement('li')
      newLi.textContent = newElfName
      elfEmployees.appendChild(newLi)
  } else {
    elfDisplay.textContent = "No valid elf names found!"
  } 
  
}  else {
    elfDisplay.append(" Elf already exists!") 
  }
  return
}


// function renderNames() {
  
// }

generateBtn.addEventListener('click', getNames) 

// Animate elf when names are added
generateBtn.addEventListener('click', function() {
  const elfImg = document.querySelector('.elf');
  elfImg.classList.add('shake');


// Remove the class after the animation is done to allow re-triggering
  setTimeout(() => {
    elfImg.classList.remove('shake');
  }, 500); // Match the duration of the animation
});



/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 
