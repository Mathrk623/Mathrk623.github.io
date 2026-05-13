連接層の導来圏に関する下の定理について、それはそうかもと思うことを目指します。

### 定理の主張[BO]
$X,Y$を体$k$上の非特異射影多様体とし、$X$の標準束$\omega_X$または反標準束$\omega_X^*$は豊富だと仮定する。

連接層の有界導来圏$\mathrm{D}^\mathrm{b}(X), \mathrm{D}^\mathrm{b}(Y)$が$k$線形な三角圏として同値ならば、$X, Y$は同型である。

### アイデア

1. $\mathrm{D}^\mathrm{b}(X),\mathrm{D}^\mathrm{b}(Y)$には、Serre 双対性により性質の良い自己同値$S_X,S_Y$が備わっている。
2. $S_X$によって$\mathcal{O}_X$と$\omega_X$の関係が分かる。$S_Y$によって$\mathcal{O}_Y$と$\omega_Y$の関係が分かる。
3. $\mathrm{D}^\mathrm{b}(X)\simeq\mathrm{D}^\mathrm{b}(Y)$を通した$\mathcal{O}_X$と$\mathcal{O}_Y$の関係から、$\omega_X$と$\omega_Y$の関係が分かる。
4. $\omega_X$や$\omega_Y$が豊富であれば、それらを使って$X,Y$が再構成できる。

### 証明のスケッチ

1. まず、同値$\mathrm{D}^\mathrm{b}(X)\simeq\mathrm{D}^\mathrm{b}(Y)$が$\mathcal{O}_X$を$\mathcal{O}_Y$に移すように調整する。

初っ端から恐縮だが、この部分は非自明であり、導来圏側の概念（point like object や invertible object）が今回の仮定の下では幾何側の概念と整合的に働いてくれるという事実に依存している。

ただ「そのように調整する」という行動自体はわかりやすいので、ここでは認めることにする。

2. Serre 双対性の帰結として、
$$S_X:\mathrm{D}^\mathrm{b}(X)\to\mathrm{D}^\mathrm{b}(X);\mathcal{F}\mapsto\omega_X\otimes\mathcal{F}[\dim X]$$