// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("organizational value", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("executive name", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("percentage of employees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("Programs offered", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development", true);
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis", true);
    expect(launchcode.programsOffered[2]).toEqual("Liftoff", true);
    expect(launchcode.programsOffered.length).toEqual(3, true);
  });

test("Method check", function(){
  expect(launchcode.launchOutput(2)).toBe("Launch!");
  expect(launchcode.launchOutput(3)).toBe("Code!");
  expect(launchcode.launchOutput(5)).toBe("Rocks!");
  expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  expect(launchcode.launchOutput(10)).toBe("Launch Rocks!")
});
  // Write your unit tests here!


  
});