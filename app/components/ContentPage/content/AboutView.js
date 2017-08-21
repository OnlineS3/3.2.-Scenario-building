import React from 'react';
import { Link } from 'react-router';


const AboutView = () => {

  return (
    <div>
      <div>
        <h1>About</h1>
        <p>Scenario building starts with the determination of the scope of the scenario work. In the context of RIS3, it may be how the nation/region will evolve in the next 20-30 years related to political, environmental, social and technological issues. </p>
        <p>As a whole, scenario process in this tool involves the following 5 steps:</p>
        <ol>
          <li>Identify future trends and uncertainties (PEST analysis template)</li>
          <li>Assess the importance of each trend and uncertainty (Impact analysis template)</li>
          <li>Form scenarios (Scenario building template)</li>
          <li>Describe scenarios in-depth (Scenario description template)</li>
          <li>Assess scenario implications and plan for preparatory actions (Preparation plan template)</li>
        </ol>
        </div>
        <div><a href="http://www.s3platform.eu/wp-content/uploads/2017/02/figure-1.png" title=""><img src="http://www.s3platform.eu/wp-content/uploads/2017/02/figure-1.png" alt=""></img></a></div>
        <div>
        <p>The tool consists of a guide for the 5 scenario building steps and helpful templates for all these steps. The first step for RIS3 facilitators (regional planners) is to formulate the scope for scenario building. Typically, this is related to how the region will develop during the next 20-30 years. Then the first step involves identifying key trends and uncertainties affecting regional development such as political, economic, social and technological issues. </p>
        <p>RIS3 facilitators can get this data in different ways, such as through preparing a desktop research, a workshop or a Delphi survey targeted to regional specialists. Scenario building tool offers a list of data sources that support the collection of trends and uncertainties in European level such as <a href="https://ec.europa.eu/growth/smes/cluster/observatory/european-cluster-trend-report_en">European Cluster Trend Report</a> and <a href="http://wiwe.iknowfutures.eu/">iKnow database</a>.</p>
        <p>Once all the trends and uncertainties have been identified, the second step is to assess their level of importance and the level of uncertainty. The assessment can be done in a workshop with regional partners or through a Delphi survey. When the assessment is done, all uncertainties are placed in a graph that organises the trends and uncertainties according to their impact and uncertainty. Hence, this exercise allows RIS3 facilitators to identify the most important trends and uncertainties. This can be done either in the workshop or in the case of Delphi by RIS3 facilitators based on the Delphi result.</p>
        <p>The third step is about building the frames for scenarios. Once the two most important uncertainties are identified, they are set as the axis of a 2x2 matrix in the scenario building template. This yields 4 distinct scenarios with their specific sets of presumptions.</p>
        <p>The fourth step can be done by RIS3 facilitators. Its main idea is to describe the scenarios in detail including the selection of a highly-descriptive title, compelling storylines and possibly a comparative table with information about the background of scenarios, related trends and more. Scenario building tool offers guidance how to describe scenarios.</p>
        <p>The fifth step involves the consideration of the implications of scenarios and building a plan for preparatory actions. This can be done either in a workshop or through a Delphi survey. The most important thing is that all quadruple helix partners with a representative sample of different parties are taken in this work. Scenario building tool offers guidance as a set of questions that need to be answered to understand the implications of scenarios. This step also includes setting indicators to monitor the development of selected uncertainties.
</p>
      </div>
    </div>
  )
}

// <a href="/logout">Logout</a>


export default AboutView;
