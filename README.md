# Deterministic-finite-automata
Implementation Deterministic finite automata on JavaScript

The task is this: the program must find the substring **"0101"** in the string specified by the user and return true - if found, false - if not.

The implementation should use the DFA algorithm, with this machine we must look for matches.
### Let's get started!
We must build an automaton of the following form:
![Иллюстрация к проекту](https://github.com/AntonBurchak/Deterministic-finite-automata/blob/master/dist/images/automat.png)

#### Let's analyze the metamatic model of this automaton:
**"0101"**
(Mathematical Model) M = {Q, Eps, δ, q0, F} consisting of:
* a finite set of states Q
* a finite set of input symbols called the alphabet (Eps)
* a transition function δ
* an initial or start state q0 => Q
* a set of accept states F

We form a mathematical model specifically for our example
----------------------------
* Q: 
  * q0 = initial state;
  * q1 = 0;
  * q2 = 01;
  * q3 = 010;
  * q4 = 0101;
* Eps = {0,1};
* q0 = {q0};
* F = q4.

Build the transition table:
-----------
![Иллюстрация к проекту](https://github.com/AntonBurchak/Deterministic-finite-automata/blob/master/dist/images/transition-table.jpg)

We build the transition diagram and check it from the original:
![Иллюстрация к проекту](https://github.com/AntonBurchak/Deterministic-finite-automata/blob/master/dist/images/automat.png)
They are identical - the task is completed.
