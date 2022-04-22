import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xda4187C5302d0adf8017062D364e7Fd8141F788d");

(async () => {
    try {
        // What's the max supply you want to set? 1,000,000 is a nice number!
        const amount = 1_000_000;
        // Interact with your deployed ERC-20 contract and mint the tokens!
        await token.mint(amount);
        const totalSupply = await token.totalSupply();
        
        // Print out how many of our token's are out there now!
        console.log("✅ There are now", totalSupply.displayValue, "$HIKE in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();