import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-watcher";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { logs: false, testFiles: ['./test/Lock.ts'] } }],
      files: ['./test/*', './contracts/*'],
      verbose: true
    }
  },
};

export default config;
