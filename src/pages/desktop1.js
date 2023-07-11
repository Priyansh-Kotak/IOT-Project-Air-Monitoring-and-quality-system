// import React from "react";
import React, { useEffect, useState } from "react";

const Desktop1 = (parse) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2215615/feeds.json?api_key=3QR76I7LLTAEW53G&results=2"
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[134.56rem] overflow-hidden text-left text-[1.94rem] text-lightcyan-100 font-urbanist">
        <div className="absolute top-[64.94rem] left-[-10.56rem] w-[110.84rem] h-[85.69rem]">
          <img
            className="absolute top-[0rem] left-[10.56rem] w-[112.84rem] h-[85.69rem]"
            alt=""
            src="/background.svg"
          />
          <div className="absolute top-[18.81rem] left-[61.5rem] w-[32.06rem] h-[38.69rem] text-center">
            <div className="absolute top-[1.75rem] left-[0rem] font-semibold text-mediumturquoise-200 inline-block w-[16.19rem]">
              Values of Index
            </div>
            <div className="absolute top-[1.75rem] left-[15.88rem] text-[1.88rem] font-semibold text-mediumturquoise-200 inline-block w-[16.19rem]">
              Levels of Concern
            </div>
            <div className="absolute top-[7.19rem] left-[4.31rem] font-semibold inline-block w-[11.88rem]">
              0 to 50
            </div>
            <div className="absolute top-[12.69rem] left-[4.31rem] font-semibold inline-block w-[11.88rem]">
              51 to 100
            </div>
            <div className="absolute top-[18.13rem] left-[4.31rem] font-semibold inline-block w-[11.88rem]">
              101 to 150
            </div>
            <div className="absolute top-[23.63rem] left-[4.31rem] font-semibold inline-block w-[11.88rem]">
              151 to 200
            </div>
            <div className="absolute top-[29.19rem] left-[4.31rem] font-semibold inline-block w-[11.88rem]">
              201 to 300
            </div>
            <div className="absolute top-[34.63rem] left-[4rem] font-semibold inline-block w-[11.88rem]">{`>= 301`}</div>
            <div className="absolute top-[7.06rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Good
            </div>
            <div className="absolute top-[12.69rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Moderate
            </div>
            <div className="absolute top-[17rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Unhealthy for Sensitive Groups
            </div>
            <div className="absolute top-[23.69rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Unhealthy
            </div>
            <div className="absolute top-[29.13rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Very Unhealthy
            </div>
            <div className="absolute top-[34.69rem] left-[15.88rem] text-[1.88rem] font-semibold inline-block w-[16.19rem]">
              Hazardous
            </div>
            <div className="absolute top-[0.16rem] left-[0.16rem] box-border w-[32.06rem] h-[0.31rem] border-t-[5px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[33.03rem] left-[0.22rem] box-border w-[31.94rem] h-[0.19rem] border-t-[3px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[38.53rem] left-[0.16rem] box-border w-[32.06rem] h-[0.31rem] border-t-[5px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[22.03rem] left-[0.22rem] box-border w-[31.94rem] h-[0.19rem] border-t-[3px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[16.47rem] left-[0.22rem] box-border w-[31.94rem] h-[0.19rem] border-t-[3px] border-solid border-mediumturquoise-100" />
            <div className="absolute top-[10.91rem] left-[0.22rem] box-border w-[31.94rem] h-[0.19rem] border-t-[3px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[5.41rem] left-[0.16rem] box-border w-[32.06rem] h-[0.31rem] border-t-[5px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[27.59rem] left-[0.22rem] box-border w-[31.94rem] h-[0.19rem] border-t-[3px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[0.16rem] left-[31.91rem] box-border w-[0.31rem] h-[38.5rem] border-r-[5px] border-solid border-mediumturquoise-200" />

            <div className="absolute top-[0.16rem] left-[16.03rem] box-border w-[0.31rem] h-[38.5rem] border-r-[5px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[0.16rem] left-[0.16rem] box-border w-[0.31rem] h-[38.5rem] border-r-[5px] border-solid border-mediumturquoise-200" />
            <div className="absolute top-[12.25rem] left-[1.31rem] rounded-3xs bg-yellow w-[3rem] h-[3rem]" />
            <div className="absolute top-[17.81rem] left-[1.31rem] rounded-3xs bg-darkorange w-[3rem] h-[3rem]" />
            <div className="absolute top-[23.31rem] left-[1.31rem] rounded-3xs bg-red w-[3rem] h-[3rem]" />
            <div className="absolute top-[28.88rem] left-[1.31rem] rounded-3xs bg-purple w-[3rem] h-[3rem]" />
            <div className="absolute top-[34.31rem] left-[1.31rem] rounded-3xs bg-brown w-[3rem] h-[3rem]" />
            <div className="absolute top-[6.88rem] left-[1.31rem] rounded-3xs bg-lime w-[3rem] h-[3rem]" />
          </div>
          <div className="absolute top-[18.69rem] left-[17.69rem] inline-block w-[36.44rem]">
            <p className="m-0">{`The higher the AQI value, the greater the level of air pollution and the greater the health concern. `}</p>
            <p className="m-0">{`For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. `}</p>
            <p className="m-0">
              AQI values at or below 100 are generally thought of as
              satisfactory. When AQI values are above 100, air quality is
              unhealthy: at first for certain sensitive groups of people, then
              for everyone as AQI values get higher.
            </p>
            <p className="m-0">{`The AQI is divided into six categories. Each category corresponds to a different level of health concern. `}</p>
          </div>
          <div className="absolute top-[10.06rem] left-[51.44rem] text-[4.69rem] font-medium font-taviraj">
            AQI Basics
          </div>
        </div>
        <div className="absolute top-[40.06rem] left-[0rem] bg-gray-100 w-[110rem] text-center h-[33.81rem] text-[4.38rem] text-steelblue font-lateef">
          <div className="left-[100rem]">
            <div className="absolute top-[5.56rem] left-[43.85rem] w-[20.71rem] h-[23.37rem] text-[6.25rem]">
              <input
                className="[border:none] bg-mediumturquoise-300 absolute top-[6.78rem] left-[0.79rem] rounded-6xl w-[16rem] h-[16rem]"
                type="text"
                maxLength
                minLength
              />
              <img
                className="absolute top-[7.24rem] left-[0.79rem] rounded-381xl w-[15.55rem] h-[11.78rem]"
                alt=""
                src="/line-2.svg"
              />
              <im
                className="absolute top-[16.6rem] left-[2.34rem] rounded-381xl w-[15.36rem] h-[6.19rem]"
                alt=""
                src="/line-1.svg"
              />
              <input
                className="[border:none] bg-lightcyan-100 absolute top-[8.78rem] left-[2.79rem] rounded-6xl w-[12rem] h-[12rem]"
                type="text"
                maxLength
                minLength
              />

              <div className="absolute top-[10.21rem] left-[3.73rem]">
                {apiData && (
                  <div key={apiData.feeds.entry_id}>
                    {apiData.feeds[apiData.feeds.length - 1].field3}
                  </div>
                )}
              </div>
            </div>

            {/* // Place a new div here  */}

            <div className="absolute top-[9.19rem] left-[10.75rem] w-[27.13rem] h-[23.29rem]">
              <input
                className="[border:none] bg-mediumturquoise-300 absolute top-[5.25rem] left-[3.56rem] rounded-6xl w-[12rem] h-[12rem]"
                type="text"
                maxLength
                minLength
              />
              <img
                className="absolute top-[5.8rem] left-[8.38rem] rounded-381xl w-[7.23rem] h-[9.77rem]"
                alt=""
                src="/line-11.svg"
              />
              <img
                className="absolute top-[7.68rem] left-[3.52rem] rounded-381xl w-[4.66rem] h-[9.57rem]"
                alt=""
                src="/line-21.svg"
              />
              <input
                className="[border:none] bg-lightcyan-100 absolute top-[7.25rem] left-[5.56rem] rounded-6xl w-[8rem] h-[8rem]"
                type="text"
                maxLength
                minLength
              />
              <img
                className="absolute h-[3.22%] w-[2.76%] top-[41.33%] right-[62.7%] bottom-[55.45%] left-[34.54%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/degree.svg"
              />
              <img
                className="absolute top-[5.81rem] left-[3.56rem] w-[2.25rem] h-[2.25rem] overflow-hidden"
                alt=""
                src="/thermometer.svg"
              />
              <div className="absolute top-[8.06rem] left-[5.75rem] text-">
                {apiData && (
                  <div key={apiData.feeds.entry_id}>
                    {apiData.feeds[apiData.feeds.length - 1].field1}
                  </div>
                )}
              </div>
            </div>

            <div className="absolute top-[13.06rem] left-[75.44rem] w-[18.79rem] h-[20.77rem]">
              <input
                className="[border:none] bg-mediumturquoise-300 absolute top-[1.4rem] left-[2.39rem] rounded-6xl w-[12rem] h-[12rem]"
                type="text"
                maxLength
                minLength
              />
              <img
                className="absolute top-[3.48rem] left-[3.84rem] rounded-381xl w-[10.15rem] h-[9.91rem]"
                alt=""
                src="/line-12.svg"
              />
              <img
                className="absolute top-[1.37rem] left-[5.03rem] rounded-381xl w-[8.91rem] h-[11.83rem]"
                alt=""
                src="/line-22.svg"
              />
              <input
                className="[border:none] bg-lightcyan-100 absolute top-[3.4rem] left-[4.39rem] rounded-6xl w-[8rem] h-[8rem]"
                type="text"
                maxLength
                minLength
              />
              <img
                className="absolute top-[1.81rem] left-[4rem] w-[0.75rem] h-[0.75rem] overflow-hidden"
                alt=""
                src="/degree1.svg"
              />
              <img
                className="absolute top-[1.88rem] left-[4.06rem] w-[0.63rem] h-[0.63rem] overflow-hidden"
                alt=""
                src="/degree2.svg"
              />
              <img
                className="absolute top-[2.38rem] left-[2.88rem] w-[1.5rem] h-[2rem] overflow-hidden"
                alt=""
                src="/droplet.svg"
              />
              <div className="absolute top-[4.21rem] left-[4.58rem]">
                {apiData && (
                  <div key={apiData.feeds.entry_id}>
                    {apiData.feeds[apiData.feeds.length - 1].field2}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="absolute top-[1.44rem] left-[44.13rem] text-[5rem] text-center font-medium font-taviraj text-lightcyan-200">
            Results
          </div>
        </div>
        <div className="absolute top-[-40.24rem] left-[0rem] w-[141.95rem] h-[90.61rem] text-[4.69rem] text-lightcyan-300 font-taviraj -z-0">
          
          <div className="absolute top-[40.24rem] left-[0rem] bg-gray-200 w-[110.38rem] h-[40rem] flex flex-col py-[2.75rem] pr-[4.31rem] pl-[4.75rem] box-border items-center justify-center gap-[1.63rem]">
            <div className="relative font-medium">About AQI Detector</div>
            <div className="relative text-[1.94rem] font-urbanist text-lightcyan-100 inline-block w-[46.31rem]">
              The AQI detector is a device designed to monitor and measure the
              air quality in a specific location. It utilizes a combination of
              gas sensors, dust sensors, and the nodeMCU microcontroller to
              collect real-time data on air pollutants and particulate matter.
              The nodeMCU collects data from the gas sensors and dust sensors
              and transmits it to a cloud-based or local server for further
              analysis. The device employs machine learning (ML) algorithms to
              process the sensor data and calculate the Air Quality Index.
            </div>
          </div>
        </div>
        <div className="absolute top-[73.81rem] left-[-0.06rem] box-border w-[150.13rem] h-[0.13rem] border-t-[2px] border-solid border-mediumturquoise-100" />
        <img
          className="absolute top-[73.81rem] left-[-0.06rem] box-border w-[150.13rem] h-[0.13rem] border-solid border-mediumturquoise-100"
          alt=""
          src="/divider-1.svg"
        />
      </div>
    </>
  );
};

export default Desktop1;
