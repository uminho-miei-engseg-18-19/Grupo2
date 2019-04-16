# Aula TP - 01/Abr/2019

# 1. Vulnerabilidade de codificação

## Resposta à pergunta 1.1

Estima-se que  qualquer pacote de *software* tem, em média , entre 5 a 50 *bugs* por cada 1000 SLOC (Source Lines Of Code - linhas de código fonte, excluindo linhas de comentário).

Deste modo, a fórmula que determina a aproximação do número de *bugs* é a seguinte:

**Número de bugs = ((Nºlinhas de código)/1000) * limite**


Sendo, o limite ou superior (= 50) ou inferior (= 5).


### Número de linhas de código:

- **Facebook -** 62 000 000
- **Software de automóveis -** 100 000 000
- **Linux 3.1 -** 15 000 000
- **Serviços Internet da Google -** 2 000 000 000 000

### 1. Estimativa do número de Bugs

- Limite inferior (5 bugs por cada 1000 SLOC)

    - **Facebook -** 310 000
    - **Software de automóveis -** 500 000
    - **Linux 3.1 -** 75 000
    - **Serviços Internet da Google -** 10 000 000

- Limite superior (50 bugs por cada 1000 SLOC)

    - **Facebook -** 3 100 000
    - **Software de automóveis -** 5 000 000
    - **Linux 3.1 -** 750 000
    - **Serviços Internet da Google -** 100 000 000


### 2. Número de Vulnerabilidades

De forma genérica, um *bug* é uma falha num programa que introduz resultados inesperados no seu funcionamento. Independentemente do contexto no qual está inserido, um *bug* apresenta uma relação muito forte com o número de linhas de código produzido (embora o número de erros por linhas de código dependa do contexto, daí os limites inferior e superior). Desta forma, a relação SLOC/*bugs* é suficientemente forte para estabelecer as estimativas apresentadas anteriormente, no entanto, o caso *bugs*/vulnerabilidades é já uma relação fraca. É difícil saber exatamente quantos *bugs* de cada sistema conduzem a vulnerabilidades, bem como quais dessas vulnerabilidades são passíveis de serem exploradas, simplesmente porque não é óbvio por vezes se cada falha de *software* tem ou não implicações de segurança do sistema. 

É assim complexo estimar o número de vulnerabilidades no código fonte de cada projeto, visto ser algo que depende de muitos fatores, como a linguagem de programação escolhida (linguagens de baixo nível são mais suscetíveis a *exploits*), a experiência e conhecimento do programador da mesma, ou até o tipo de aplicação desenvolvida, entre outros. Segundo a National Vulnerability Database, até ao momento foram identificadas (e muitas das quais já corrigidas) 84 vulnerabilidades relacionadas com o Facebook, 11 vulnerabilidades relacionadas com o Linux 3.1, e 4721 vulnerabilidades relacionadas com serviços Google.

## Resposta à pergunta 1.2

Uma vulnerabilidade é definida como uma condição que, quando explorada por um atacante, pode resultar numa violação de segurança. Exemplos de vulnerabilidades são falhas no projeto, na implementação ou na configuração de programas, serviços ou equipamentos de rede. Um ataque de exploração de vulnerabilidades ocorre quando um atacante, utilizando uma vulnerabilidade, tenta executar ações maliciosas, como invadir um sistema, aceder informações confidenciais, disparar ataques contra outros computadores ou tornar um serviço inacessível.

**Fonte: https://pt.wikipedia.org/wiki/Vulnerabilidade_(computa%C3%A7%C3%A3o)**

As vulnerabilidades podem ser classificadas em 3 categorias, **Projeto**, **Codificação** e **Operacional**.

- **Vulnerabilidades de projeto** são introduzidas durante a fase de projeto do *software* (obtenção de requisitos e desenho) e catalogados como **CVE (Common Vulnerabilities and Exposures)**. 

Com mais detalhe, estas vulnerabilidades podem consistir em:

1. Falhas no levantamento de requisitos, por exemplo, não incluir no plano do projeto uma fase de verificação de acesso;

2. Durante a fase de planeamento do projeto, pode ficar decidido implementar um sistema que use algoritmos com vulnerabilidades conhecidas, que representarão por si só uma vulnerabilidade para todo o sistema.

3. Algumas vulnerabilidades podem ser introduzidas deliberadamente. Por exemplo, se a *password* de um *router* for fraca de forma a que seja facilmente lembrada pelos utilizadores, isso constitui uma vulnerabilidade, mas apenas porque foi decidido previamente que assim seria.

4. Limitação do acesso aos dados do utilizador associado sem implementação de um mecanismo de cifragem dos mesmos. 


Seguem-se duas vulnerabilidades de projeto específicas:
    
    - [CVE-2016-1960](https://nvd.nist.gov/vuln/detail/CVE-2016-1960)
        - **Mozilla Firefox < 45.0 - 'nsHtml5TreeBuilder' Use-After-Free (EMET 5.52 Bypass)**
        
            Foi descoberta na versão **44.0.2** e consistia num fluxo contínuo de números inteiros na **classe nsHtml5TreeBuilder** no analisador de sequências HTML5. Permitia que atacantes remotos executassem código arbitrário ou causassem uma negação de serviço **use-after-free**, promovendo a manipulação incorreta das tags finais.

            A vulnerabilidade foi depois corrigida na versão 45 do Mozilla Firefox.

        
    - [CVE-2015-4495](https://nvd.nist.gov/vuln/detail/CVE-2015-4495)
        - **Mozilla Firefox < 39.03 - 'pdf.js' Same Origin Policy Exploit**

            Foi descoberta na versão **39.0.3** e quando explorada permitia ao atacante ler e copiar informação do computador da vítima, assim que esta visitasse o website criado para exploração.

            O leitor de PDF do Mozilla Firefox até à versão **39.0.3**, permitia que atacantes remotos ultrapassassem a política **Same Origin Policy** e lessem ficheiros arbitrários ou ganhassem previlégios, através de vetores que envolvem código JavaScript escrito pelo atacante e um setter nativo.

            Para corrigir esta vulnerabilidade o utilizador só tinha de atualizar o browser para uma versão superior à 39.0.3.


- **Vulnerabilidades de codificação** são introduzidas durante a programação do *software*, como por exemplo, um *bug* com implicações de segurança. Assim como as anteriores, estas vulnerabilidades são também catalogadas como **CVE (Common Vulnerabilities and Exposures)**.

Com mais detalhe, pode-se considerar o caso do *buffer overflow*, caso em que o programador não teve os devidos cuidados na forma como a memória do programa é gerida; ou o caso do *heartbleed*, uma vulnerabilidade ao nível da implementação do código na biblioteca OpenSSL que levou ao *leak* de vários dados privados (como chaves privadas) de vários serviços que utilizam essa biblioteca. Esta vulnerabilidade é particularmente grave uma vez que se localiza ao nível da implementação de uma biblioteca que é muito usada para vários serviços, em que a segurança de dados e correspondente privacidade são essenciais.

Seguem-se duas vulnerabilidades de codificação específicas:

    - [CVE-2016-5537](https://nvd.nist.gov/vuln/detail/CVE-2016-5537)
        - **Oracle Netbeans IDE 8.1 - Directory Traversal**

            A vulnerabilidade no componente **NetBeans no Oracle Fusion Middleware 8.1** permitia aos utilizadores locais afetar a confidencialidade, integridade e disponibilidade através de vetores desconhecidos.

            É uma vulnerabilidade de passagem de diretório que permitia que utilizadores locais com determinadas permissões escrevessem em arquivos arbitrários e, consequentemente, ganhassem privilégios numa entrada de arquivos num ficheiro ZIP importado como um projeto.

    - [CVE-2017-9798](https://nvd.nist.gov/vuln/detail/CVE-2017-9798)
        - **Apache < 2.2.34 / < 2.4.27 - OPTIONS Memory Leak**

            Permitia que os atacantes remotos lessem dados secretos da memória do processo se a diretiva limite pudesse ser definida no arquivo **.htaccess** de um utilizador, ou se o **httpd.conf** tivesse certas configurações erradas, (Optionsbleed). Isso afeta o Servidor HTTP Apache nas versões **2.2.34** e **2.4.x** até **2.4.27**. O invasor poderia enviar uma solicitação **HTTP de OPÇÕES** não autenticadas ao tentar ler dados secretos. 
            
            Era um problema de **uso após o uso** e, portanto, os dados secretos nem sempre eram enviados e os dados específicos dependiam de muitos fatores, incluindo a configuração. A exploração com **.htaccess** podia ser bloqueada com um patch para a função **ap_limit_section** no **servidor/core.c**.


- **Vulnerabilidades operacionais** são causadas pelo ambiente no qual o *software* é executado ou pela sua configuração. Estas são catalogadas como **CCE (Common Configuration Enumeration)**.

Com mais detalhe, um exemplo de vulnerabilidade operacional será o de, por exemplo, num dado ambiente como o de uma empresa, poder haver entidades estranhas ao sistema a terem acesso a informações confidenciais, seja por fugas de informação, ou por falhas, por exemplo, descuido de quem tem acesso a tais informações (documentos confidenciais abertos num computador com o ecrã ligado e desbloqueado). Poderá também haver possíveis vulnerabilidades que resultem da configuração de funcionalidades do sistema por parte de entidades sem conhecimentos para tal, ou ainda da configuração de determinado *software* que não tem em conta configurações de segurança exigidas.

Seguem-se duas vulnerabilidades operacionais específicas:

    - **Windows 7**
        - [CCE-10814-2](http://www.scaprepo.com/view.jsp?id=CCE-10814-2)
    
            Por padrão, quando a rede do Windows está ativa num servidor, o Windows criará partilhas administrativas ocultas, o que é indesejável em servidores altamente seguros.

        - [CCE-10061-0](http://www.scaprepo.com/view.jsp?id=CCE-10061-0)

            Permite desativar a capacidade do computador cliente de imprimir em HTTP, o que permite que imprima em impressoras na intranet e na Internet.

A titulo de curiosidade, segue-se as correções associadas às três categorias de vulnerabilidades apresentadas:

A **correção das vulnerabilidades de projeto** pode implicar uma restruturaçao de todo o sitema, o que poderia implicaria gastos de dinheiro e de tempo excessivos para uma organização, mas também pode implicar apenas modificar componentes específicas do sistema, o que já é exequível.

Na **correção de vulnerabilidades de codificação** a dificuldade pode estar associada à deteção da vulnerabilidade, que por vezes pode ser difícil. A correção de um *bug* de *software* que esteja a introduzir uma vulnerabilidade deste tipo poderá normalmente passar por um ou mais *patches*. No entanto, pode ser necessário introduzir mais vulnerabilidades ou pode simplesmente não ser exequível a aplicação de um *patch* em certos sistemas.

A **correção de vulnerabilidades operacionais** passa por haver uma política rigorosa de práticas a ter quando se lida com dados confienciais, de forma a que entidades terceiras não lhes possam nunca aceder.


## Resposta à pergunta 1.3


As principais diferenças entre vulnerabilidades dia-zero e qualquer outro tipo de vulnerabilidades de codificação concentra-se nas entidades que possuem conhecimento sobre a existência da mesma. Ao contrário da norma, que origina a sua divulgação pública de forma a que o fornecedor possa corrigir essas falhas, estas são conhecidas apenas por um grupo restrito de pessoas, não sendo divulgadas para a comunidade que lida com segurança informática.


Deste modo, vulnerabilidades dia-zero são falhas na segurança de um *software* e identificam-se por serem vulnerabilidades que são encontradas e podem ser exploradas antes que os *developers* tenham tempo para as resolver. A origem do seu nome vem do facto que estas vulnerabilidades terem de ser resolvidas em menos de um dia, desde a sua descoberta, ou seja, no dia zero, pois possíveis atacantes podem aproveitar-se.


Estas vulnerabilidades podem ser utilizadas por grupos de piratas informáticos para efetuar ataques, de forma sigilosa, ou vender na *dark web*, bem como no meio militar de um país (ciber-armas).

Em suma, vulnerabilidades de dia-zero são vulnerabilidades pré-existentes no código que os _developers_ do _software_ não conhecem, e que são descobertas e atacadas antes que sejam desenvolvidos _patches_ para as mesmas.