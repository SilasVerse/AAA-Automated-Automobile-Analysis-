# 🚗 Car Price Analysis & Automation Project

This was a small automation + data-analysis project built during our UiPath and Python learning phase.  
It combines **web data extraction (UiPath)**, **data analysis (Python)**, and **PDF reporting (Node.js)** — all automated in a single workflow!

------
## 👥 Team Members
- [Naing Soe Htut](https://github.com/nshciei45)
- [Htay Lwin](https://github.com/SilasVerse)
- **Yin Yin Kyaw**  
- **Khin Kaung Nge**

---

## 🔹 Process Workflow

### **Step 1 – Data Extraction (UiPath)**
- Automated data scraping from two used-car websites:
  - *CAR FROM JAPAN*  
  - *Autocom Japan*
- Extracted the following data fields:
  - Car Name  
  - Registration Year  
  - Transmission Type  
  - Mileage  
  - Engine Capacity  
  - Price
- Exported datasets into:
  - `cars_data.csv`  
  - `cars_data2.csv`

---

### **Step 2 – Data Analysis (Python)**
- Notebook file: `cars_analyze_notebook.ipynb`  
- Processed the extracted datasets using **pandas**, **numpy**, and **seaborn**.  
- Key operations:
  - Data cleaning and normalization  
  - Conversion of price values from Yen to USD  
  - Statistical correlation and trend analysis  
- Visualizations generated:
  - Engine vs Price  
  - Mileage vs Price  
  - Year vs Price  
- Output plots were saved as image files (`.jpg`).

---

### **Step 3 – Report Generation (Node.js)**
- Script file: `create_pdf.js`  
- Used **pdfkit** to combine the generated graphs into a single report document.  
- Output file: `report.pdf`

---

### **Step 4 – Automated Workflow (UiPath)**
- Main workflow file: `Main.xaml`  
- Automation steps:
  1. Execute the Python notebook  
  2. Run the Node.js script to generate the report  
  3. Send the final PDF report via **Outlook 365** as an email attachment  

---

## 🧠 Tools and Technologies

| Category | Tools & Libraries |
|-----------|-------------------|
| **Automation** | UiPath Studio |
| **Data Analysis** | Python (pandas, numpy, seaborn, matplotlib, scikit-learn) |
| **Reporting** | Node.js with pdfkit |
| **Communication** | Outlook 365 (UiPath Mail Activities) |

---

## 📂 Project Files

| File | Description |
|------|--------------|
| `Main.xaml` | UiPath main automation workflow |
| `cars_analyze_notebook.ipynb` | Python data analysis notebook |
| `create_pdf.js` | Node.js script for PDF report generation |
| `cars_data.csv`, `cars_data2.csv` | Extracted datasets from the web sources |


---

## 🏁 Conclusion
This project provided hands-on experience in **cross-platform integration** and **workflow automation**.  
It demonstrates how multiple technologies can be combined to perform data processing, analysis, and reporting with minimal manual effort.  

The experience strengthened our understanding of:
- Data automation pipelines  
- Process orchestration using UiPath  
- Real-world data analysis techniques  

---

> **Developed as part of the KE-8118: Robotic Systems Subject.**
