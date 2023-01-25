import React from 'react';
import Card from '../card';
import desa from '../../../../assets/image/desa.PNG'
import meraki from '../../../../assets/image/petheroLaravel.PNG'

const Laravel = () => {
  return (
    <div>
      <Card img={desa} link="https://github.com/islahola/cijujung" judul="Desa Cijujung" apk = "Laravel" detail="
      Duration: Two weeks,
      Technologies: Laravel,SASS,Bootstrap, Javascript and Jquery, Created a website desa cijujung jawabarat  with up to date technologies and frameworks."/>
      <Card img={meraki} link="http://pethero.rf.gd/" judul="Pet Hero" apk = "Laravel" detail="
      Duration: Fiva Days,
      Technologies: Laravel,SASS,Bootstrap, Javascript and Jquery, Created a about hero and everything with up to date technologies and frameworks."/>
    </div>
  );
}

export default Laravel;
