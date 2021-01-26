// Pseudocode for a Computer Task (Simple Calculator)

  // Output asking for an integer or float
  // Accept first user input
  // Validate first user input (integer or float)
    // If the user input is not valid...
      // Go back to Line 3

  // Output asking for a second integer or float
  // Accept second user input
  // Validate second user input (integer or float)
    // If the user input is not valid...
      // Go back to Line 9

  // Output asking for what operator (String)
    // A for addition
    // S for subtraction
    // M for multiplication
    // D for division
  // Accept user input
  // Validate user input (String)
    // IF the user input is not valid...
      // Go back to Line 15

  // Calculate
    // If the operator is additon...
      // Add the first two inputs
    // If the operator is subtraction...
      // Subtract the first two inputs
    // If the operator is multiplication...
      // Multiply the first two inputs
    // If the operator is division...
      // If the second input is 0...
        // Output "Cannot divide by zero"
        // Skip to Line
      // If the second input is not 0...
        // Divide the first two inputs

  // Output the result of calculation
  // Output asking if the user wants to calculate something else
    // Y for yes
    // N for no
  // Accept user input
  // Validate user input
    // If the user input is not valid...
      // Go back to Line 40

  // Check if the last input was Y or N
    // If the user input is "Y"...
      // Go back to Line 3
    // If the user input is "N"...
      // Output "Goodbye"
      // Stop program
