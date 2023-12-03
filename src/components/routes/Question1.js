import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";


function Question() {
 const [data1, setData1] = useState(0); 
 const [data2, setData2] = useState(0); 
 const [data3, setData3] = useState(0); 
 const [data4, setData4] = useState(0); 
 const [data5, setData5] = useState(0); 
 const [data6, setData6] = useState(0); 
 const [data7, setData7] = useState(0); 
 const [data8, setData8] = useState(0); 
 const [data9, setData9] = useState(0); 
 const [data10, setData10] = useState(0); 
 const [data11, setData11] = useState(0); 
 const [data12, setData12] = useState(0); 
 const [data13, setData13] = useState(0); 
 const [data14, setData14] = useState(0); 
 const [data15, setData15] = useState(0); 
 

  return (
    <div>
      <div>
        <h1 className="TitleText">Awe & Wonderment</h1>
      </div>
      <div>
        <text className="wa">
          1.I feel a deep sense of wonder and astonishment when I watch skilled
          stage magicians perform.
        </text>
        <h1>{data1}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData1(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          2. The complexity and mystery of stage magic performances often leave
          me in awe.
        </text>
        <h1>{data2}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData2(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          3. Witnessing certain stage magic tricks gives me a sense of amazement
          and reverence.
        </text>
        <h1>{data3}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData3(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          4. I experience a profound sense of wonderment when I'm deceived by a
          well-executed magic trick.
        </text>
        <h1>{data4}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData4(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          5. I am often struck by the sheer brilliance and artistry behind stage
          magic illusions.
        </text>
        <h1>{data5}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData5(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          6. Witnessing stage magic performances leaves me feeling captivated
          and entranced.
        </text>
        <h1>{data6}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData6(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          7. The intricacy and precision of stage magic illusions often leave me
          in a state of awe.
        </text>
        <h1>{data7}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData7(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          8. I am amazed by the ability of stage magicians to manipulate my
          perceptions and senses.
        </text>
        <h1>{data8}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData8(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          9. Certain stage magic tricks evoke a sense of astonishment that is
          hard to put into words.
        </text>
        <h1>{data9}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData9(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          10. I find myself marveling at the ingenuity and creativity behind
          well-executed magic performances.
        </text>
        <h1>{data10}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData10(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          11. The surprises and illusions presented in stage magic performances
          often leave me speechless.
        </text>
        <h1>{data11}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData11(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          12. I feel a sense of enchantment and fascination when I'm engaged
          with a stage magic trick.
        </text>
        <h1>{data12}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData12(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          13. Witnessing stage magic performances can be a source of profound
          and uplifting experiences.
        </text>
        <h1>{data13}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData13(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          14. The mastery of stage magicians in creating illusions fills me with
          wonder and admiration.
        </text>
        <h1>{data14}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData14(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
          15. I find myself entranced by the spectacle and spectacle of
          well-performed stage magic.
        </text>
        <h1>{data15}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData15(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
      <Link to='/Question'>
          <button className="Button" />
        </Link>
      </div>
    </div>
  );
}

export default Question;
