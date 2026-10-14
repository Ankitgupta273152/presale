# Presale dApp (React + Vite + Tailwind + shadcn/ui + ethers)

## Run
1. Install Node.js 18 or 20.
2. In this folder:
   npm install
   copy .env.example to .env   (set VITE_CHAIN_ID and VITE_PRESALE_ADDRESS)
   npm run dev
3. Open http://localhost:5173 and click "Connect MetaMask".

## Build for hosting
npm run build      (output in /dist, upload it to Netlify, Vercel or any static host)

## Settings (.env)
VITE_CHAIN_ID           11155111 = Sepolia, 97 = BNB testnet, 56 = BNB mainnet
VITE_PRESALE_ADDRESS    your presale contract address
Token, USDT and treasury addresses are read from the presale contract automatically.
You can also paste another presale address in the box on the page and click Load.

## Features
- Connect MetaMask, auto switch to the right network
- Live sale status, countdown, progress bar, price, raised, remaining, limits
- Buy flow: enter USDT -> Approve -> Buy, with slippage protection and clear error messages
- Your balances, contributed amount, treasury and contract addresses (copy and explorer links)
- Owner panel (only for the owner wallet): pause/unpause, price, limits, sale window, treasury, withdraw unsold
- Responsive (mobile, tablet, desktop), dark and light theme

## Folders
src/components/ui     shadcn/ui components (button, card, input, badge, progress, alert ...)
src/components        app screens (Header, SaleStatus, BuyCard, AccountCard, ContractsCard, OwnerPanel)
src/hooks             useWallet, usePresale, useNow
src/lib               config, abi, format, errors, tx

## Add more shadcn components later
npx shadcn@latest add dialog tabs select     (components.json is already set up)
