# 기존 네트워크 초기화
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

# 네트워크 실행 및 체인코드 배포
```
cd ~/fabric-sample/test-network
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