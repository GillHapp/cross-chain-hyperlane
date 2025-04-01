
# **Hyperlane Warp Route UI for Cross-Chain Native Token Transfers** 🚀

## **Overview**

This project provides a **user-friendly web interface** to **bridge native tokens** across blockchain networks using **Hyperlane Warp Routes**. It allows users to **transfer native BNB from BSC Testnet to Sepolia** securely and efficiently.

## **How It Works: Cross-Chain BNB Transfer Flow** 🌉

Transferring **BNB** from **BSC Testnet** to **Sepolia** involves several steps:

### **1️⃣ User Initiates the Transfer**
- The user selects **BNB** as the token to transfer.
- The destination chain is chosen as **Sepolia**.
- The amount of **BNB** to be transferred is specified.

### **2️⃣ Wrapping Native BNB on BSC Testnet**
- Since **native BNB** (not an ERC-20 token) is not directly transferable via the Hyperlane Warp Route, it must first be **wrapped into a synthetic ERC-20 token**.
- This process **locks the user's BNB** into a smart contract deployed on **BSC Testnet**.
- A **wrapped BNB ERC-20 token** is then created as a representation of the locked BNB.

### **3️⃣ Interchain Messaging via Hyperlane**
- The Hyperlane protocol **verifies the transfer request** and **sends an interchain message** to Sepolia.
- The message contains details like:
  - **Amount of BNB wrapped**
  - **User's receiving address**
  - **Destination chain (Sepolia)**

### **4️⃣ Minting a Synthetic BNB ERC-20 Token on Sepolia**
- Upon receiving the interchain message:
  - A **synthetic ERC-20 token** representing **BNB** is minted on **Sepolia**.
  - The equivalent amount of **synthetic BNB** is assigned to the user’s wallet.

### **5️⃣ Completion of Transfer**
- The user can now use the **synthetic BNB ERC-20 token** on **Sepolia**.
- This token can be **swapped, used in DeFi protocols, or bridged back** if needed.

---

## **Why Use Hyperlane Warp Route for BNB Transfers?** 🤔

✅ **Permissionless & Secure** – No reliance on third-party bridges. Hyperlane uses interchain security mechanisms.  
✅ **Decentralized & Trustless** – The user retains full control of their funds throughout the process.  
✅ **Scalability & Efficiency** – Native token bridging is made simple, reducing transaction costs and complexity.  
✅ **Interoperability** – Supports multiple blockchains, allowing users to transfer assets seamlessly.  

---

## **Project Architecture** 🏗️

This project is built using modern **web3 technologies** to provide a **smooth user experience** for interchain transfers:

- **Next.js & React** – Frontend framework for the UI.
- **Wagmi & RainbowKit** – Manages wallet connections and transactions.
- **Hyperlane SDK** – Enables interchain messaging and secure token bridging.

### **Project Structure** 📁

- 🔹 **Configuration Files:** `./src/consts/` – Defines token warp routes, chain settings, and contract addresses.  
- 🔹 **Main Interface:** `./src/pages/index.tsx` – The landing page where users interact with the bridge.  
- 🔹 **Core Features:** `./src/features/` – Implements the logic for sending transactions and handling blockchain interactions.  

---

## **Setup & Development Guide** 🛠️

Follow these steps to **set up and run the project** locally.

### **1️⃣ Install Dependencies**
```sh
yarn
```

### **2️⃣ Configure WalletConnect**
To interact with wallets, **get a projectId** from [WalletConnect Cloud](https://cloud.walletconnect.com) and add it to `.env.local`:

```sh
NEXT_PUBLIC_WALLET_CONNECT_ID=<your_project_id>
```

### **3️⃣ Build the Project**
```sh
yarn build
```

### **4️⃣ Run the Development Server**
```sh
yarn dev
```

### **5️⃣ Testing**
```sh
# Lint check
yarn lint

# Type checking
yarn typecheck
```

### **6️⃣ Formatting Code**
```sh
yarn prettier
```

### **7️⃣ Cleaning & Resetting**
```sh
yarn clean
```

---

## **Supported Blockchain Networks** 🌎

This project currently supports **BSC Testnet and Sepolia**, with pre-configured RPC URLs for seamless interaction.

```yaml
sepolia:
  chainId: 11155111
  domainId: 11155111
  name: sepolia
  protocol: ethereum
  rpcUrls:
    - http: https://ethereum-sepolia.publicnode.com

bsctestnet:
  chainId: 97
  domainId: 97
  name: bsctestnet
  protocol: ethereum
  rpcUrls:
    - http: https://data-seed-prebsc-1-s1.binance.org:8545
```

---

## **Deployment** 🚀

This project is optimized for **Vercel deployment**.

### **To Deploy on Vercel:**
1. **Create a Vercel Account** at [vercel.com](https://vercel.com).
2. **Connect Your GitHub Repo**.
3. **Deploy in One Click**.

---

## **Future Enhancements** 🔮

✅ **Support More Networks** – Add additional EVM-compatible chains.  
✅ **Cross-Chain Withdrawals** – Enable reverse transfers from Sepolia to BSC Testnet.  
✅ **Improved UI/UX** – Enhance transaction history tracking and user experience.  

---

## **Resources & Documentation** 📚

- 🔗 [Hyperlane Docs](https://docs.hyperlane.xyz/docs/reference/applications/warp-routes)  
- 🔗 [WalletConnect Docs](https://docs.walletconnect.com/)  
- 🔗 [BSC Testnet Explorer](https://testnet.bscscan.com/)  
- 🔗 [Ethereum Sepolia Explorer](https://sepolia.etherscan.io/)  
