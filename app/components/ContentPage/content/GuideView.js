import React from 'react';
import { Link } from 'react-router';
import Collapsible from 'react-collapsible';


const GuideView = () => {

  return (
    <div>
      <div>
        <h1>Guide</h1>
		<p>Key steps to building scenarios and assess their implications:</p>
		<ol>
			<li>Identify future trends and uncertainties (PEST analysis template)</li>
			<li>Assess the importance of each trend and uncertainty (Impact analysis template)</li>
			<li>Form scenarios (Scenario building template)</li>
			<li>Describe scenarios in-depth (Scenario description template)</li>
			<li>Assess scenario implications and plan for preparatory actions (Preparation plan template)</li>
		</ol>

		<Collapsible trigger="Guidance for step 1">
			<p>To create viable scenarios later on, it’s necessary to understand what future uncertainties and trends can impact the region significantly. </p>
			<h2>Trends and Uncertainties - What is the difference?</h2>
			<p>Trends and uncertainties are both factors that may affect the future of a region. The difference is in their certainty. Trends are almost definite things that can be forecasted from how things are right now. For example, urbanisation and digitalization are evident right now, and it’s very likely that they will continue to develop further in the coming decades.</p>
			<p>Uncertainties are more ambiguous. For example, the preferred mode of living might change rapidly so that people want to live mostly by themselves or so that community living becomes popular. Both options are possible, and they can greatly affect the regional housing industry.</p>

			<h2>Understanding uncertainties with wildcards and weak signals</h2>
			<p>Foresight studies often detect uncertainties with the help of <a href="http://wiwe.iknowfutures.eu/what-is-a-weak-signal/">weak signals</a> and wildcards. Weak signals are patterns in the current time that could predict a certain future. For example, increasing self-medication is a weak signal that might convey more frequent undetected diseases and a rising risk for overdoses in the future.</p>
			<p>Wildcards, on the other hand, are very unlikely situations that could change things in the world overnight. For example, a great earthquake or a fast-spreading pandemic could be a wild card. Regional scenario building facilitators can explore weak signals and wildcards through surveys, workshops or literature searches. There might even be local actors who already make regional foresight analyses.</p>

			<h2>Gathering the data</h2>
			<p>There are multiple ways to gather data for scenario building. Contacting regional stakeholders is a rather effective method, but literature searches are also possible. In fact, different data sources may yield results that support one another.</p>
			<p>Due to the fact that similar actors might have similar ideas, it’s always important to gather data on uncertainties and trends from a variety of stakeholders. Methods for this include, for example, Delphi surveys, general surveys and workshops. And as it happens, there are Online S3 tools that support these data collection methods.</p>
			<p>Delphi surveys can be used very closely with scenario building. The method is based on gathering survey data from regional experts and typically aims at gaining a better understanding of the region’s future possibilities. This, in turn, allows regional foresight facilitators to form refined scenarios.</p>
			<p>Read more about the Delphi method <a href="http://foresight.s3platform.eu/">here</a>.</p>
			<p>Next, it’s likely that regional foresight facilitators are already familiar with general survey options. However, if not, the Online S3 6.4 End user satisfaction survey tool can be helpful. The tool presents several survey platforms, which can prove useful.</p>
			<p>Read more about the end user satisfaction survey <a href="http://satisfactionsurvey.s3platform.eu/index.html">here</a>.</p>
			<p>There is no basic workshop tool within the Online S3 toolset, but the Online S3 4.1 EDP focus group tool can give great new ideas for workshops.</p>
			<p>Read more about the EDP focus group tool <a href="http://edp.s3platform.eu/">here</a>.</p>
			<p>The uncertainties and trends can also be gathered by a literature search. There are plenty of international statistic data that can reveal underlying regional trends. Furthermore, there are multiple organisations that map important global and regional trends and future forecasts. See the related documents for external resources on statistical data and foresight study.</p>

			<h2>Using PEST to map uncertainties and trends</h2>
			<p>PEST (Political, Economic, Social, Technological) - analysis is a framework which allows structuring uncertainties and trends in a useful form. More formally, PEST-analysis is an analytical tool for strategic management which helps company management to understand the macro-environment of the company. Consequently, regional foresight facilitators can use the framework to construct a robust understanding of the regional trends and uncertainties. Moreover, the framework enables regions to identify which PEST sectors might need more thorough mapping. </p>
			<p>Furthermore, since there is a dreadful amount of factors that may affect the region’s future, the uncertainties become easier to assess when they are categorised in the PEST categories.</p>
			<p>In conclusion, the aim of the PEST framework is to categorise uncertainties and trends into four categories. Those that raise from the political context of the region, from economical issues, from social factors and from technological trends and development.</p>
      <p>The tool includes examples of trends and uncertainties which support regions to start working with the templates.</p>

			<h3>Political factors</h3>
			<p>Political factors are always related to the activities and decisions of the government, in the case of an EU region, the government can mean both the national government and the EU policies and actions.</p>
			<p>Questions to consider:</p>
			<p><i>Are there going to be great changes in tax policies? Labour laws? Environmental laws?<br/>
			Is the government stable in the future?<br/>
			What kind of impact will the government have on health, education and infrastructure in the region?<br/>
			How will the tariffs and trade restrictions develop in the future?<br/>
			</i></p>

			<h3>Economic factors</h3>
      <p>Economic factors relate to the global, European, national and regional development. There are major uncertainties related to global trade, affected also by political movements.</p>

			<p>Questions to consider:</p>
			<p><i>How will global free trade agreements develop?<br/>
      How will the Euro develop in relation to foreign currencies?<br/>
      How various industries, for example real estate and finance sector develop?<br/>
      What are the trends in employement rate?
			</i></p>

			<h3>Social factors</h3>
			<p>Social factors include things related to common attitudes, culture and population. Moreover, social trends will greatly affect many aspects of the region. For example, the ageing population might indicate a smaller proportion of workforce (perhaps conveying rising labour costs) and rising demand for health services.</p>
			<p>Questions to consider: </p>
			<p><i>What are the age distribution and population growth like in the future?<br/>
			Will people be more conscious of their health?<br/>
			Will there be a strong national culture in the future or will there be strong sub-cultures instead?<br/>
			What are will people’s attitudes towards career choices, safety and domestic work like be like?
			</i></p>

			<h3>Technological factors</h3>
			<p>Technological aspects include things like automation, R&D activity and technological change related factors. Also, the pace of technological advancement is a technological factor.</p>
			<p>Questions to consider:</p>
			<p><i>Will emerging technologies create new markets and opportunities for the region?<br/>
			Is automation going to replace many jobs in the future?<br/>
			Can the region benefit from innovations around an emerging technology?
			</i></p>

			<h2>How to use the Online S3 PEST template</h2>
			<p>Our PEST-analysis template is easy to use. The template is a PDF file that may be filled in with an internet browser (at least Chrome, Chromium, [Safari?] and Internet Explorer support this, Firefox cannot be used for this) or with a PDF reader such as Adobe Acrobat or the iOS Preview.</p>
			<ol>
				<li>Click the PEST template or the Scenario building process template button on the right sidebar.</li>
				<li>Open the PDF template in an internet browser (Chrome, Safari or Internet Explorer) or in a PDF reader (Adobe Acrobat, PDF X-change editor or iOS Preview). Note that is you want to save your progress, you need to save the file on your computer.</li>
				<li>Replace the example texts in the text fields with uncertainties and trends related to your region.</li>
			</ol>

			<h2>The analysis can be more thorough</h2>
			<p>The PEST-analysis can be extended for regional needs especially if regional workshops/surveys/expert interviews/literature suggests that there are great underlying phenomena that don’t fall into any of the PEST categories. Specifically, Legal and Environmental factors are often added to the PEST factors.</p>

        </Collapsible>

		<Collapsible trigger="Guidance for step 2">
		<p>The goal of this step is to identify which uncertainties and trends the scenarios should be based on. These most important uncertainties are the ones that are most unpredictable and impactful while most important trends are the ones that have the most impact on the region. Mind that this step builds on the uncertainties and trends listed in the previous step.</p>
		<p>Assessing the impact and uncertainty levels of all previously listed trends and uncertainties can be done through a regional workshop, workshops, general surveys or Delphi survey.</p>
		<p>Especially if the first round of Delphi was utilised to gather the trends and uncertainties, it’s convenient to engage the same experts to assess the uncertainty and impact levels on the second Delphi round. Read more about this option from the <a href="http://foresight.s3platform.eu/">Delphi application page</a>.</p>
		<p>Second viable method to assess the importance and uncertainty of factors is to engage regional stakeholders and experts in workshops. Workshops act as a conversation and discussion ground to determine all aspects that affect the uncertainty and importance of a factor. Thus, the workshop facilitators need to engage diverse stakeholders and ensure that all views are covered. This assessment style yields consensual uncertainty and impact estimates.</p>
		<p>If the impact analysis facilitators rather have the stakeholder engagement and discussions online, the conversation can also be facilitated in the Online S3 tool 1.2 Stakeholder engagement. The tool allows regional discussions and voting specific comments. Read more about Stakeholder engagement <a href="http://engagement.s3platform.eu/">here</a>.</p>
		<p>Including stakeholders in this analysis will yield a refined understanding of the impacts and uncertainties. Moreover, involving stakeholders also contribute to stakeholder engagement.</p>
		<p>The Impact analysis template is used to figure out which gathered uncertainties are the most important ones. Consequently, the most important uncertainties will become the base of scenario building. </p>

		<h2>How uncertain and impactful the uncertainties are?</h2>
		<p>At this point, after the data gathering and PEST-analysis, there should be quite a number of uncertainties to assess. All these uncertainties are assessed in terms of their uncertainty and impact on the region. Of course, it’s also possible to assess trends as well, but since their uncertainty should be very low, the assessment of their impact is more important.</p>
		<h3>Uncertainty</h3>
		<p>Uncertainty is high among those uncertainties which could have almost any outcome and the outcome cannot be predicted with the current knowledge. Thus, when the uncertainty is high, it’s especially important to assess how to prepare for the possible outcomes.</p>
		<p>In our template, the uncertainty is measured on a scale of 0 to 10. 10 means that the outcome of an uncertainty is not sure at all with the current knowledge, and 0 means that the outcome can be predicted. Thus, uncertainties with the uncertainty level of 0 are not really uncertainties at all. In fact, they should be called trends instead.</p>

		<h3>Impact</h3>
		<p>Some uncertainties don’t affect the region that much whatever the outcome. Thus, it’s not much use to assess these in the actual scenarios. In contrast, some uncertainties can pose great opportunities or be detrimental to the region.</p>
		<p>In the Impact analysis template, the impact is measured on a scale of 0 to 10. 0 means that the factor is completely indifferent to the region and 10 conveys the greatest impact possible.</p>

		<h2>Step-by-step guide to use the Impact analysis tool</h2>
		<ol>
			<li>Click the Impact analysis template button on the right sidebar.</li>
			<li>Login to the platform (if you aren’t registered to the platform, please do so, it’s free).</li>
			<li>Now you should be able to see your impact analyses. In fact, every time you make a new analysis it appears on the list and can be modified later on. Create a new analysis.</li>
			<li>Insert all the uncertainties (and trends) to the template and assess their level of impact and uncertainty as you go. Remember that the assessment should engage stakeholders and experts.</li>
			<li>Check which uncertainties end up in the upper right corner and select two of them for the basis of your scenarios. Also, select highly impactful trends as presumptions for all your scenarios.</li>
		</ol>

		<h2>Which uncertainties should be taken into scenarios?</h2>
		<p>Ideally, two uncertainties should be selected as the presumptions of scenarios. These uncertainties should be selected from the upper right corner of the impact analysis matrix. In other words, the selected presumptions should be high in uncertainty and in impact. The below Figure 5 shows how uncertainties and trends rank in the impact analysis template. As can be seen, the upper right corner uncertainties are the most important ones.</p>
		<p><a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Importance-analysis-example.png" title=""><img src="http://www.s3platform.eu/wp-content/uploads/2017/07/Importance-analysis-example.png" alt="" /></a></p>
		</Collapsible>

		<Collapsible trigger="Guidance for step 3">
		<p>When the most important uncertainties and trends are selected, it’s time to create the frames or presumptions for scenarios. In greater detail, the aim is to formulate two extreme outcomes for each of the two key uncertainties and consequently create 4 distinct scenarios. The Scenario building template can be used in this step.</p>
		<p>Only after the presumptions for different scenarios are ready, can scenarios be described in detail. This can be done by using the Scenario description template. Clear and elaborative descriptions of the scenarios are a vital part in forming scenarios. Engaging scenarios will give more to think about and fascinate participants to think more about how the region should anticipate different possible futures.</p>

		<h2>This is not the only way to form scenarios</h2>
		<p>While our templates are helpful for forming scenarios, the above isn’t the only way to build scenarios. In essence, the basic idea of having uncertainties and trends as the foundation of scenario building is the same with all scenario building styles. Read more about different scenario building methods <a href="https://www.slideshare.net/adgo/scenario-building-workshop-how-to-build-and-use-scenarios">here</a>.</p>
		<h2>Scenario building template</h2>
		<p>Scenario building template helps with visualising the presumptions for each scenario. In this scenario building approach, 4 distinct scenarios are built with two uncertainties. Here is how to do it:</p>
		<ol>
			<li>Click the Scenario building template on the right sidebar or continue where you left off in the Scenario process template. Note that the document can be modified in some browsers (at least in Chrome, Internet Explorer and Safari) and in PDF readers (Adobe Acrobat, PDF X-change editor or iOS Preview). Also, remember, if you want to save your progress, you need to save the file on your computer.</li>
			<li>Write the two key uncertainties on the sides of the matrix. These could be, for example, technological advancement, the influence of global warming on maritime or the future trends in global transport.</li>
			<li>Next, write the selected extreme outcomes of your uncertainties at the end of both axes. For example, extreme outcomes for technological advancement could be stagnation or increase in the pace of technological advancement.</li>
			<li>Write the presumptions for each scenario. This can include specific outcomes of the uncertainties (such as; automation increases, global warming changes the sea ecosystems so that there will be less fish or daily global transport increases and pandemics become more likely) and future trends that are important. Get them from the step 2.</li>
			<li>Name the scenarios. See the guidance for step 4 to learn how to name the scenarios effectively.</li>
		</ol>
		<p><a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario-building1.png" title=""><img src="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario-building1.png" alt="" /></a></p>

		</Collapsible>

		<Collapsible trigger="Guidance for step 4">
		<h2>Scenario description template</h2>
		<p>Scenario description template can be used to form detailed descriptions for the scenarios, building on the presumptions from the step 3. However, to form more elaborative scenario descriptions, it’s advised to use a richer media (such as PowerPoint slides for example) than the Scenario description templates. This template is none-the-less great for writing initial scenario descriptions. There are two types of Scenario description templates, one with only text fields and another with one image field per scenario.</p>
		<p>This is how you can use the template:</p>
		<ol>
			<li>Click the Scenario description template on the right sidebar or continue where you left off in the Scenario process template. Note that the document can be modified in some browsers (at least in Chrome, Internet Explorer and Safari) and in PDF readers (Adobe Acrobat, PDF X-change editor and iOS Preview). Also, remember, if you want to save your progress, you need to save the file on your computer.</li>
			<li>First, name your 4 scenarios in an elaborate way (read the guidance below).</li>
			<li>Write detailed and elaborative descriptions for each of the scenarios. What will happen in the region when the previously formed presumptions are valid? You can also add images for your scenarios if you are using the Scenario description template with image fields.</li>
			<li>See the checklist below and check that your scenario descriptions are exquisite.</li>
		</ol>
		<p><a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario-description3.1..png" title=""><img src="http://www.s3platform.eu/wp-content/uploads/2017/07/Scenario-description3.1..png" alt="" /></a></p>

		<h2>Elaborative Scenarios</h2>
		<p>It’s vital that scenarios are elaborative and interesting. In fact, the more intriguing the scenarios are, the more they tease out creative thinking, solutions and preparation plans in the next phase. Thus, good scenarios should include storylines and detailed portrayals of what life is like in the region in the scenario. Be creative!</p>
		<p>The final scenario descriptions should also include visualisations of the scenarios. Hence, the description could actually include images, comics, videos and other kinds of visual aids. The final descriptions could be made in a variety of formats. They can include slide presentations or videos, for instance.</p>

		<h2>Checklist for scenarios</h2>
		<p><i>Are the scenarios plausible?<br/>
		Is there a logical chain of events that would lead to each of the scenarios?<br/>
		If the scenarios really happen, what else needs to happen? </i>(For example, if the scenario is based on the presumption that there will be more internet security problems it’s necessary to incorporate a reason for that)<br/>
		<i>Are the scenarios internally consistent? </i>There shouldn’t be any events or drivers that exclude one another.<br/>
		<i>Are the scenarios differentiated from one another?<br/>
		Do scenarios challenge the conventional thinking or are they somewhat unsurprising?<br/></i>
		Scenarios should shed light on unconventional possibilities and help the region to prepare for things that are not already expected.<br/>
		<i>Are the scenario titles descriptive?<br/>
		Are the storylines fascinating?<br/>
		Are there any visual materials to elaborate the scenarios?<br/></i>
		It’s also beneficial to do an actor analysis in this step. Hence, think about different stakeholders in the scenario and assess their interests. <br/>
		<i>Are there groups of people who benefit or would drive this scenario?</i> <br/>
		If a scenario is the worst option for all interest groups it’s probably not a plausible scenario. <br/>
		Note here that scenarios shouldn’t be assessed regarding their probability. Thus, there shouldn’t be any probabilities or probability analyses in the scenario descriptions.</p>

		</Collapsible>

		<Collapsible trigger="Guidance for step 5">
		<p>Scenarios shouldn’t be made just for the sake of making scenarios. Instead, the learnings from scenario work should always be incorporated into the actual strategy making process. Thus, in this step, the scenario work is taken back to the actual strategy process.</p>
		<p>The scenarios include both opportunities and threats. Furthermore, there is always actors who benefit and those who suffer. Good scenarios rarely are bad or good for all stakeholders.</p>
		<p>Thus, it’s necessary to understand the opportunities and threats and think about the implications for the overall smart specialisation strategy.<i> How to best seize the opportunities? How to brace for the threats? </i>Moreover, since the scenarios portray future possibilities that could have a great impact on the region, it’s vital to set indicators for the future development.</p>

		<h2>Opportunities and threats assessment</h2>
		<p>Are there common challenges or opportunities across the different scenarios? These are the most likely things that should be incorporated in the region’s strategy in one way or another. The Online S3 tool 2.7, SWOT analysis, can be helpful in assessing each of the scenarios. Read more about the SWOT analysis method <a href="http://li1088-54.members.linode.com:8082/swot/">here</a>.</p>

		<h2>Preparation plan template</h2>
		<p>The Preparation plan template helps to understand what should be done in case one of the scenarios actually realises, and fathom if there are similar challenges or opportunities. The top part of the template should be filled in first.</p>
		<ol>
			<li>Click the Preparation plan template on the right sidebar or continue where you left off in the Scenario process template. Note that the document can be modified in some browsers (at least in Chrome, Internet Explorer and Safari) and in PDF readers (Adobe Acrobat, PDF X-change editor and iOS Preview). Also, remember, if you want to save your progress, you need to save the file on your computer.</li>
			<li>Write the titles of your scenarios. You should have them from the previous steps.</li>
			<li>Write for all scenarios what challenges opportunities there are and how to best prepare for them.</li>
			<li>Now, write down the common factors in the challenges and opportunities. And assess how to prepare from them. How should the conclusions be incorporated in the overall RIS3 strategy?</li>
		</ol>
		<p>All of the Scenario preparation description boxes are filled with challenges, opportunities and how to prepare for them. Here, it’s crucial to think what preparatory actions could be taken in any case. It’s also good to evaluate if there are especially impactful uncertainties that could be taken into account in the overall strategy.</p>
		<p><a href="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation-plan2.1-1-e1500895104423.png" title=""><img src="http://www.s3platform.eu/wp-content/uploads/2017/07/Preparation-plan2.1-1-e1500895104423.png" alt=""></img></a></p>
		<h2>Create indicators</h2>
		<p>It might be beneficial to create early indicators for each of the scenarios, especially if there are great underlying opportunities or threats that could be prepared for in advance. By studying the development of selected uncertainties in the future, the region might be able to seize future opportunities or prepare for threats so that the challenges are minimised.</p>
		<p>Depending on the challenges and opportunities, the Online S3 tool 6.2, Analytics of output and result indicators, might be helpful and provide ideas on how to create indicators for future development. Read more about the tool <a href="https://indicators.s3platform.eu/onlines3_indicators_2/about.php">here</a></p>

		</Collapsible>

        </div>
      </div>
  )
}

// <a href="/logout">Logout</a>


export default GuideView;
