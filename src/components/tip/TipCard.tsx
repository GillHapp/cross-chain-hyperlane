import { useState } from 'react';
import { config } from '../../consts/config';
import { links } from '../../consts/links';
import { Card } from '../layout/Card';

export function TipCard() {
  const [show, setShow] = useState(config.showTipBox);
  if (!show) return null;
  return (
    <Card className="w-100 p-2 sm:w-[31rem]">
      <h2 className="text-primary-500">Exclusively Between BSC Testnet & Sepolia 🔗</h2>
      <div className="flex items-end justify-between">
        <p className="mt-1 max-w-[75%] text-xs">
        This bridge only works for BNB transfers between BSC Testnet and Sepolia. When sending BNB from BSC Testnet, the native token is locked in a contract, and a synthetic ERC-20 version of BNB is minted on Sepolia. This synthetic token only exists on Sepolia and cannot be transferred to other networks outside this setup.
        </p>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-primary-500 transition-all hover:bg-gray-200 active:bg-gray-300 sm:text-sm"
        >
          {/* <Image src={InfoCircle} width={12} alt="" /> */}
          {/* <span className="ml-1.5 hidden text-sm sm:inline">More</span> */}
        </a>
      </div>
      <div className="absolute right-3 top-3">
        {/* <IconButton onClick={() => setShow(false)} title="Hide tip" className="hover:rotate-90">
          <XCircleIcon width={16} height={16} />
        </IconButton> */}
      </div>
    </Card>
  );
}
