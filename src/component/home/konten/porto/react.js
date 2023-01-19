import React from 'react';
import Card from '../card';
import skz from '../../../../assets/image/skz.PNG'
import porto from '../../../../assets/image/portofolio.PNG'
import Kanban from '../../../../assets/image/kanban.PNG'
import kasir from '../../../../assets/image/kasir.png'
import severless from '../../../../assets/image/severless.PNG'
const ReactPorto = () => {
  return (
    <div>
    <Card link="https://straykidsolla.netlify.app/" img={skz} judul="Stray kids" apk = "React.js" detail=" Duration: Fiva days,
        Technologies: React.js,Bootstrap, Javascript, Created a content about kpop boyband stray kids  with up to date technologies and frameworks.
         "/>
    <Card link="https://islahkhofifah.netlify.app/" img={porto} judul="Portofilio Islah" apk = "React.js" detail=" Duration: Two weeks,
        Technologies: React.js, Bootstrap,style component, Javascript, Created a content about myself  with up to date technologies and frameworks. "/>
    <Card link="https://mykanbanboard.netlify.app/" img={Kanban} judul="Kanban Board" apk = "React.js" detail=" Duration: One weeks,
        Technologies: React.js, Bootstrap Javascript, Created a content about Notes and everything  with up to date technologies and frameworks. "/>
    <Card link="https://kasirolla.netlify.app/" img={kasir} judul="My Cashier" apk = "React.js" detail =" Duration: Four Days,
        Technologies: React.js, Bootstrap Javascript, Created a content about Cashier and everything  with up to date technologies and frameworks."/>
    <Card link="https://eloquent-dubinsky-906e84.netlify.app/login" img={severless} judul="Severless" apk = "React.js" detail=" Duration: Still Develop,
        Technologies: PHP, Javascript, AWS, Created a content about myself  with up to date technologies and frameworks. "/>
    </div>
  );
}

export default ReactPorto;
