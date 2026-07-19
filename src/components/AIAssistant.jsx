import { useState } from "react";
import {
  FaRobot,
  FaChartLine,
  FaBox,
  FaUsers,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";

import "./AIAssistant.css";


export default function AIAssistant({
  stats = {},
  insights = [],
}) {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState(
    "👋 Hello! I am SellAI Assistant. Ask me about your business."
  );


  function askAI() {

    if (!question.trim()) return;


    const text = question.toLowerCase();


    if(text.includes("revenue") || text.includes("дохід")) {

      setAnswer(
        `📈 Current revenue: $${stats.revenue?.toLocaleString() || 0}.
        Forecast: $${stats.forecast?.toLocaleString() || 0}.`
      );

      return;
    }



    if(text.includes("profit") || text.includes("прибуток")) {

      setAnswer(
        `💰 Current profit:
        $${stats.profit?.toLocaleString() || 0}`
      );

      return;
    }



    if(text.includes("order") || text.includes("замов")) {

      setAnswer(
        `📦 Total orders:
        ${stats.orders || 0}`
      );

      return;
    }



    if(text.includes("customer") || text.includes("клієн")) {

      setAnswer(
        `👥 Total customers:
        ${stats.customers || 0}`
      );

      return;
    }



    if(text.includes("insight") || text.includes("аналіз")) {

      setAnswer(
        insights.length
        ? insights.join("\n")
        : "No AI insights available."
      );

      return;
    }



    setAnswer(
      "🤖 I analyze your sales data. Try asking about revenue, profit, orders or customers."
    );

  }



  return (

    <div className="ai-assistant">


      <div className="ai-header">

        <FaRobot />

        <div>

          <h2>
            SellAI Assistant
          </h2>

          <p>
            AI Business Intelligence
          </p>

        </div>

      </div>



      <div className="ai-input-box">


        <textarea

          placeholder="Ask AI about your business..."

          value={question}

          onChange={(e)=>
            setQuestion(e.target.value)
          }

        />


        <button onClick={askAI}>
          Ask AI
        </button>


      </div>



      <div className="ai-answer">

        {answer}

      </div>




      <div className="ai-cards">


        <div className="ai-card green">

          <FaChartLine/>

          <div>

            <h4>
              Revenue Analysis
            </h4>

            <p>
              AI monitors sales growth
            </p>

          </div>

        </div>





        <div className="ai-card blue">

          <FaBox/>

          <div>

            <h4>
              Product Analysis
            </h4>

            <p>
              Finds best sellers
            </p>

          </div>

        </div>





        <div className="ai-card purple">

          <FaUsers/>

          <div>

            <h4>
              Customer Insights
            </h4>

            <p>
              Understand customer behavior
            </p>

          </div>

        </div>





        <div className="ai-card orange">

          <FaLightbulb/>

          <div>

            <h4>
              AI Recommendations
            </h4>

            <p>
              Improve business decisions
            </p>

          </div>

        </div>



      </div>



    </div>

  );

}