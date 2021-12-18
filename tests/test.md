I'll be testing my custom hooks by:
- Import them
- Use them in a dummy component
- Then in the state values check if they're defined
- Also check if the value should be "some string value"
- I'll also use dummy data for the useUser, and might use MockServiceWorker to test useNFT

Steps:
- Render the login component
- Mock an event: user click
- Use data to replace default state values
- Test against null or undefined values

Pseudocode:
import [custom_hook]
import [UserInfo] <!-- uses hook internally? -->

test:
    render[UserInfo / custom hook]
    expect[toBeNull]
    fireEvent[click] <!--MSW-->
    expect [not.toBeNull]
    expect [someValue].toEqual("foo")

