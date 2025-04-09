"use client";
import { useContext, useState } from 'react';
import styles from '../../styles/page.module.scss'
import { useMobile } from "@/app/lib/useMobile";
import { MDOContext } from '@/app/musica-de-oficinas/page';


const MenuMDO = () => {
    
const mobile = useMobile();

const context = useContext(MDOContext);
const [selected, setSelected] = useState(false)

const handleClick = (tagName:string) => {

    if (context?.section !== tagName) {
    context?.setSection(tagName)
    setSelected(true)

}

else {
    context?.setSection("musica-de-oficinas")
    setSelected(false)
}
}
    return (
    
    <>
    
    {
    mobile ?

    <svg width="80%" className={styles.vector} viewBox="0 0 295 232" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="iPhone-SE-gen-2" transform="translate(-40.000000, -15.000000)">
              <g id="Group-5" transform="translate(40.376799, 17.000000)">
                  <g id="Group" transform="translate(5.623201, 0.000000)">
                      <g id="a-link" transform="translate(10.001751, 7.710799)" fill="#FFFFFF" fillOpacity="0" fillRule="nonzero" fontFamily="AmericanTypewriter, American Typewriter" fontSize="27.972028" fontWeight="normal">
                          <text id="Música-de-Oficinas">
                              <tspan x="0" y="25">Música de Oficinas</tspan>
                          </text>
                      </g>
                      <g id="a-link" transform="translate(10.001751, 7.710799)" fill="#D8D8D8" fillOpacity="0" fillRule="nonzero" fontFamily="AmericanTypewriter, American Typewriter" fontSize="27.972028" fontWeight="normal" stroke="#979797" strokeWidth="1.16550117">
                          <text id="Música-de-Oficinas">
                              <tspan x="0" y="25">Música de Oficinas</tspan>
                          </text>
                      </g>
                      <g id="a-link" transform="translate(10.001751, 7.710799)" fill="#D8D8D8" fillOpacity="0" fillRule="nonzero" fontFamily="AmericanTypewriter, American Typewriter" fontSize="27.972028" fontWeight="normal" stroke="#979797" strokeWidth="1.16550117">
                          <text id="Música-de-Oficinas">
                              <tspan x="0" y="25">Música de Oficinas</tspan>
                          </text>
                      </g>
                      <g id="a-link" transform="translate(10.001751, 7.710799)" fill="#000000" fontFamily="AmericanTypewriter, American Typewriter" fontSize="27.972028" fontWeight="normal" stroke="#FFFFFF" strokeWidth="1.16550117">
                          <text id="Música-de-Oficinas">
                              <tspan x="0" y="25">Música de Oficinas</tspan>
                          </text>
                      </g>
                      <polygon id="Path-Copy" stroke="#FFFFFF" strokeWidth="4" points="0 0 270 0 270 47 0 47"></polygon>
                  </g>
                  <g id="Group-2" transform="translate(154.727997, 89.045376)">
                      <g id="Rectangle-5-Copy" transform="translate(68.895203, 25.954624) rotate(8.000000) translate(-68.895203, -25.954624) translate(15.895203, 7.954624)" fill="#000000" stroke="#FFFFFF" strokeWidth="5">
                          <g id="Rectangle-2" transform="translate(0.000000, -0.000000)">
                              <path d="M103.5,2.5 L103.5,33.5 L2.5,33.5 L2.5,2.5 L103.5,2.5 Z" id="Rectangle"></path>
                          </g>
                      </g>
                      <text onClick={()=> context.setSection("elenco")} id="1" transform="translate(69.712200, 22.901976) rotate(8.000000) translate(-69.712200, -22.901976) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="24" fontWeight="normal" fill="#FFFFFF">
                          <tspan x="31.2761996" y="31.4019763">Elenco</tspan>
                          <tspan x="108.1482" y="31.4019763" fontSize="21"></tspan>
                      </text>
                  </g>
                  <g id="Group-2-Copy" transform="translate(3.112837, 76.104944)">
                      <g id="Rectangle-5-Copy" transform="translate(73.398624, 32.183118) rotate(8.000000) translate(-73.398624, -32.183118) translate(14.539406, 7.955842)" fill="#000000" stroke="#FFFFFF" strokeWidth="5">
                          <g id="Rectangle-2" transform="translate(58.859218, 24.227276) rotate(-6.000000) translate(-58.859218, -24.227276) translate(1.603707, 5.884346)">
                              <path d="M112.011023,2.5 L112.011023,34.1858597 L2.5,34.1858597 L2.5,2.5 L112.011023,2.5 Z" id="Rectangle"></path>
                          </g>
                      </g>
                      <text onClick={()=> context.setSection("historia")}id="0" transform="translate(72.276582, 42.102503) rotate(2.000000) translate(-72.276582, -42.102503) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="24" fontWeight="normal" fill="#FFFFFF">
                          <tspan x="25.5245823" y="40.6025032">Historia</tspan>
                      </text>
                  </g>
                  <g id="Group-3" transform="translate(151.772284, 173.121700)">
                      <g id="Rectangle-5-Copy-2" transform="translate(70.350917, 20.878300) rotate(1.000000) translate(-70.350917, -20.878300) translate(19.850917, 0.878300)" fill="#000000" stroke="#FFFFFF" strokeWidth="5">
                          <g id="Rectangle-2" transform="translate(-0.000000, 0.000000)">
                              <path d="M98.5,2.5 L98.5,37.5 L2.5,37.5 L2.5,2.5 L98.5,2.5 Z" id="Rectangle"></path>
                          </g>
                      </g>
                       <text 
                      onClick={()=> context.setSection("galeria")} 
                      transform="translate(71.399318, 32.122866) rotate(1.000000) translate(-71.399318, -32.122866) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="21" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="34.9013179" y="27.6228663"> Galería</tspan> 
                      </text>
                  </g>
                  <g id="Group-4" transform="translate(0.000000, 145.905112)">
                      <g id="Rectangle-5-Copy-3" transform="translate(68.623201, 41.594888) rotate(8.000000) translate(-68.623201, -41.594888) translate(4.206466, 8.644405)" fill="#000000" stroke="#FFFFFF" strokeWidth="5">
                          <g id="Rectangle-4" transform="translate(64.416735, 32.950483) rotate(-15.000000) translate(-64.416735, -32.950483) translate(2.416735, 15.450483)">
                              <g id="Rectangle-2" transform="translate(0.000000, 0.000000)">
                                  <path d="M121.5,2.5 L121.5,32.5 L2.5,32.5 L2.5,2.5 L121.5,2.5 Z" id="Rectangle"></path>
                              </g>
                          </g>
                      </g>
                      <text onClick={()=> context.setSection("criticas")} id="2" transform="translate(68.868249, 50.025386) rotate(-7.000000) translate(-68.868249, -50.025386) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="24" fontWeight="normal" fill="#FFFFFF">
                          <tspan x="24.3002487" y="48.5253858">Críticas</tspan>
                      </text>
                  </g>
                  <line x1="233.123201" y1="48.5" x2="230.623201" y2="98" id="Line-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
                  <line x1="231.123201" y1="136.5" x2="223.123201" y2="177.5" id="Line-4-Copy-2" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
                  <line x1="73.6232007" y1="129" x2="73.6232007" y2="168" id="Line-4-Copy-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
                  <line x1="83.8732007" y1="47" x2="84.1232007" y2="89.5" id="Line-4-Copy-6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square"></line>
              </g>
          </g>
      </g>
  </svg>
        :
    <svg className="vector"  width="80%" viewBox="0 0 912 225" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="iMac-21.5&quot;-2" transform="translate(-224.000000, -92.000000)" stroke="#FFFFFF">
                <g id="Group-2" transform="translate(224.973886, 94.000000)">
                    <path d="M7.24866575,105.270047 L96.5453832,105.350067 L171.297187,105.417053 L171.363874,180.300666 L89.3440803,180.227167 L7.31535297,180.15366 L7.24866575,105.270047 Z" id="Rectangle" strokeWidth="5" fill="#000000" transform="translate(89.306270, 142.785357) rotate(8.000000) translate(-89.306270, -142.785357) "></path>
                    <path d="M485.41236,130.685771 L585.858875,130.719909 L669.98772,130.748502 L670.009519,195.301713 L577.723532,195.270348 L485.434158,195.238983 L485.41236,130.685771 Z" id="Rectangle" strokeWidth="5" fill="#000000" transform="translate(577.710939, 162.993742) rotate(3.000000) translate(-577.710939, -162.993742) "></path>
                    <path d="M724.513469,123.106725 L820.932864,123.25385 L901.683925,123.377067 L901.791804,194.482178 L724.621348,194.211836 L724.513469,123.106725 Z" id="Rectangle" strokeWidth="5" fill="#000000" transform="translate(813.152636, 158.794451) rotate(14.000000) translate(-813.152636, -158.794451) "></path>
                    <path d="M392.764928,140.051841 L392.723355,211.178447 L318.741514,211.256257 L244.767855,211.334059 L244.789424,174.431153 L244.809428,140.207453 L325.375446,140.122718 L392.764928,140.051841 Z" id="Rectangle" strokeWidth="5" fill="#000000" transform="translate(318.766392, 175.692950) rotate(-7.000000) translate(-318.766392, -175.692950) "></path>
                    <polygon id="Path" strokeWidth="4" points="674.026114 0 674.026114 84 202.026114 84 202.026114 0"></polygon>
                    <line x1="572.082156" y1="88.8681645" x2="572.082156" y2="130.933382" id="Path" strokeWidth="3" strokeLinecap="square"></line>
                    <line x1="674.526114" y1="41.5" x2="837.540192" y2="127.458746" id="Path-Copy-3" strokeWidth="3" strokeLinecap="square"></line>
                    <line x1="332.082156" y1="88.8751533" x2="331.082156" y2="136.932846" id="Path-Copy" strokeWidth="3" strokeLinecap="square"></line>
                    <line x1="201.526114" y1="41.5" x2="99.9510888" y2="107.810188" id="Path-Copy-2" strokeWidth="3" strokeLinecap="square"></line>
                    <text id="Música-de-Oficinas" strokeWidth="2" fontFamily="AmericanTypewriter, American Typewriter" fontSize="48" fontWeight="normal" fill="#000000">
                        <tspan x="223.026114" y="57">Música de Oficinas</tspan>
                    </text>
                    <text className={`${styles.etiqueta} ${ context?.section === "historia" && styles.selected}`} onClick={()=> handleClick("historia")}   id="0" strokeWidth="2" transform="translate(89.627771, 140.923045) rotate(8.000000) translate(-89.627771, -140.923045) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="36" fontWeight="normal" fill="#000000">
                        <tspan x="22.1277714" y="152.923045">historia</tspan>
                    </text>
                    <text className={`${styles.etiqueta} ${ context?.section === "elenco" && styles.selected}`} onClick={()=> handleClick("elenco")} id="1" strokeWidth="2" transform="translate(318.335797, 171.219234) rotate(-7.000000) translate(-318.335797, -171.219234) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="36" fontWeight="normal" fill="#000000">
                        <tspan x="262.835797" y="183.219234">elenco</tspan>
                    </text>
                    <text  className={`${styles.etiqueta} ${ context?.section === "criticas" && styles.selected}`} onClick={()=> handleClick("criticas")}  id="2" strokeWidth="2" transform="translate(575.312174, 160.413608) rotate(3.000000) translate(-575.312174, -160.413608) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="36" fontWeight="normal" fill="#000000">
                        <tspan x="510.312174" y="172.413608">críticas</tspan>
                    </text>
                    <text className={`${styles.etiqueta} ${ context?.section === "galeria" && styles.selected}`}  onClick={()=> handleClick("galeria")} strokeWidth="2" transform="translate(809.184429, 155.424538) rotate(13.000000) translate(-809.184429, -155.424538) " fontFamily="AmericanTypewriter, American Typewriter" fontSize="36" fontWeight="normal" fill="#000000">
                        <tspan x="749.684429" y="167.424538"> 
                          galería</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
}
    </>

    );
}

export default MenuMDO;