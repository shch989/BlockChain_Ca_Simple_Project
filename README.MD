# 해당 프로젝트는 Hyperledger Fabric의 예시 코드를 React와 NestJS환경에서 구현한 프로젝트입니다.
## 기존 네트워크 초기화
```
./startnetwork.sh
```
```
./createchannel.sh
```
```
./setAnchorPeerUpdate.sh
```
```
cd ccp
```
```
chmod +x ccp-generate.sh
```
```
./ccp-generate.sh
```

## connection-org1.json 복사
```
cd src/config/
```
```
cp ~/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/connection-org1.json ./
```

## 네트워크 실행 및 체인코드 배포
```
cd ~/fabric-samples/test-network
```
```
./network.sh down
```
```
./network.sh up createChannel -c mychannel -ca
```
```
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-go/ -ccl go -cci initLedger
```
