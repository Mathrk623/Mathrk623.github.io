## Serre functor の強すぎる性質３選

### 導入

Serre duality を抽象化することで、純圏論的に Serre functor という概念が定義されます。

「Serre functor が存在する」というのは圏の構造に対する非常に強い制約であり、連接層の導来圏を調べるうえで基本的な道具となります。

この記事では Serre functor を定義し、

> 1. 圏同値との交換
> 2. 随伴の増殖
> 3. 完全性（これのみ三角圏の話）

が成立することを紹介します。

前提知識は圏の言葉と線形代数くらいですが、3. のみ三角圏の話になります。定義のモチベーションである Serre duality を知っていると読みやすいはずですが、必須ではありません。

以下はほぼすべて[Huy]の1章の内容ですので、証明の詳細はそちらを参照してください。

### 約束

全体を通して体$k$を固定します。

考える圏は有限次元$k$線形であるとします。すなわち、加法圏であって$\mathrm{Hom}$が有限次元$k$線形空間の構造を持っており、合成は$k$双線形だとします。

考える関手は$k$線形であるとします。すなわち、誘導される$\mathrm{Hom}$間の写像が$k$線形写像であるとします。

$V^*$で$V$の双対空間を表します。

（このように括弧内で余談として代数幾何の話をする場合、$X$は$k$上の非特異射影多様体、$\mathrm{D^b}(X)$は$X$上の連接層の有界導来圏とします。）


### 0. Serre functor の定義


> #### 定義（Serre functor）
> 圏$\mathcal{A}$の自己同値$S:\mathcal{A}\to\mathcal{A}$が **Serre functor** であるとは、任意の$A,B\in\mathcal{A}$に対し関手的な$k$線形空間の同型
> $$\eta_{A,B}:\mathrm{Hom}_\mathcal{A}(A,B)\cong\mathrm{Hom}_\mathcal{A}(B,S(A))^*$$
> が存在することをいう。

$\mathrm{Hom}$の左右を圏同値を介して入れ替えられると言っているのですから、Serre functor が存在すればかなり様々なことが成り立ちそうです。

（余談：Serre duality は連接層$\mathcal{E},\mathcal{F}$について関手的な以下の同型を主張します。

$$\mathrm{Ext}_X^i(\mathcal{E},\mathcal{F})\cong\mathrm{Ext}_X^{n-i}(\mathcal{F},\mathcal{E}\otimes\omega_X)^*$$

導来圏において書き直すと、

$$\mathrm{Hom}_{\mathrm{D}^\mathrm{b}(X)}(\mathcal{E},\mathcal{F})\cong\mathrm{Hom}_{\mathrm{D}^\mathrm{b}(X)}(\mathcal{F},\mathcal{E}\otimes\omega_X[n])^*$$

となります。Serre functor の定義はこれを抽象化になっているので、$\mathrm{D^b}(X)$は実際に Serre functor $S_X=-\otimes\omega_X[\dim X]$を持っているということになります。）

### 1. 圏同値との交換

**Serre functor は任意の圏同値と交換する**ことが言えます。

> #### 定理 1（圏同値との交換）
> 圏$\mathcal{A},\mathcal{B}$はそれぞれ Serre functor $S_\mathcal{A},S_\mathcal{B}$を持つとする。このとき、任意の圏同値
> $$F:\mathcal{A}\to\mathcal{B}$$
> は Serre functor と交換する、すなわち関手の同型
> $$F\circ S_\mathcal{A}\simeq S_\mathcal{B}\circ F$$
> が存在する。

特に$\mathcal{A}=\mathcal{B},F=\mathrm{Id}_\mathcal{A}$と置くことで、以下が分かります。

> #### 系（Serre functor の一意性）
> 任意の圏に対し、その上の Serre functor は存在すれば同型を除き一意である。

証明は簡単なパズルです（二重双対との自然な同型に注意し、米田の補題に持っていく）。

（余談：この命題より、例えば$X,Y$が導来同値であるとき、すなわち圏同値$F:\mathrm{D^b}(X)\simeq\mathrm{D^b}(Y)$が存在する場合には、$F$はそれぞれの Serre functor $-\otimes\omega[\dim]$と交換しなければなりません。すると$\omega_X$と$\omega_Y$が$F$を通して関係していることが分かり、$\omega_X$や$\omega_X^*$がampleな場合には、導来同値ならば$X\cong Y$であることが示されます。）

### 2. 随伴の増殖

**片側随伴があれば逆側随伴が存在する**ことが言えます。

> #### 定理 2（随伴の増殖）
> 圏$\mathcal{A},\mathcal{B}$はそれぞれ Serre functor $S_\mathcal{A},S_\mathcal{B}$を持つとする。
> 
> 関手$F:\mathcal{A}\to\mathcal{B}$が右随伴$G$を持つならば、$S_\mathcal{A}^{-1}\circ G\circ S_\mathcal{B}$は$F$の左随伴である。
> 
> 関手$G:\mathcal{B}\to\mathcal{A}$が左随伴$F$を持つならば、$S_\mathcal{B}\circ F\circ S_\mathcal{A}^{-1}$は$G$の右随伴である。

<画像>

証明は、再び二重双対に注意して、簡単なパズルです。

（余談：$\mathrm{D^b}(X)$が Serre functor を持つことを考えると、$Lf^* \dashv Rf_*$の右側に随伴$Rf_*\dashv f^!$が存在するということ（Grothendieck-Verdier duality の一部）は、$f^!$の明示式も含めて上の命題から分かってしまいます。とはいっても、導来圏における Serre duality はふつう Grothendieck-Verdier duality を構造射に適用することで出すと思うので、議論の順序には注意が必要ですが。）

### 3. 完全性

**Serre functor は常に三角圏構造と両立する**ことが言えます。

三角圏の間の関手$F:\mathcal{A}\to\mathcal{B}$が完全関手であるとは、
- シフトと交換する, つまり$F(A[1])=F(A)[1]$,
- 完全三角を完全三角に写す, つまり$A\to B\to C\to A[1]$が$\mathcal{A}$の完全三角ならば$F(A)\to F(B)\to F(C)\to F(A)[1]$は$\mathcal{B}$の完全三角である

が成立することを言うのでした。

> #### 定理 3（完全性）
> 三角圏の Serre functor は、常に完全関手である。

シフトは by def で圏の自己同値ですので、定理1より Serre functor と交換することは分かります。完全三角を完全三角に写すことは非自明で証明も大変ですが、三角圏の公理や$\mathrm{Hom}$長完全列を用いて示されます。

（余談：主に興味がある$\mathrm{D^b}(X)$上の Serre functor $S_X=-\otimes\omega_X[\dim X]$は完全関手$-\otimes\omega_X$と完全関手$[\dim X]$の合成なので、実はこの命題を使うまでもなく完全関手であることは分かります。しかし、抽象的な Serre functor の定義に三角圏の要素は入っていませんから、常に三角圏の構造を尊重するというのは不思議なことだと思います。）

### まとめ

Serre functor は、シンプルな定義から面白い性質が色々出てくるので面白いですね！