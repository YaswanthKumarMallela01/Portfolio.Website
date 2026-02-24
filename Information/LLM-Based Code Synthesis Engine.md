# LLM-Based Code Synthesis Engine

## Overview
The **LLM-Based Code Synthesis Engine** is an automated Python-based system that generates **fully executable Python code** from structured problem definitions provided in JSON format. Once triggered, the system runs silently in the background, invokes a Large Language Model (LLM) via the **Gemini API**, and saves the generated solution directly into the project directory without requiring any human interaction.

This project focuses on **program synthesis and automation**, not machine learning model training.

---

## Key Features
- One-click automated Python code generation
- Background execution with no UI or console window
- Strict policy-based prompt enforcement
- Dataset-aware and rule-driven code synthesis
- College-level, exam-oriented coding style
- Automatic output file generation

---

## Project Structure

LLM-Based Code Synthesis Engine/<br>
│<br>
├── .venv/ # Virtual environment<br>
├── Salary.csv # Sample dataset (optional)<br>
├── Program_requirements.json # System-level configuration<br>
├── question_requirements.json # Problem definition input<br>
├── main.pyw # Core logic (background execution)<br>
├── Run.bat # One-click execution trigger<br>
└── README.md # Documentation<br>

---

## Core Files Explained

### main.pyw
- This is the **core execution script** of the project.
- Written with a `.pyw` extension to ensure **silent background execution**.
- Responsibilities include:
  - Reading problem requirements from `question_requirements.json`
  - Constructing a strict, rule-based prompt
  - Calling the Gemini API for code generation
  - Automatically saving the generated Python code into the project folder

---

### Run.bat
- Serves as the **single-click automation entry point**.
- When double-clicked:
  - Executes `main.pyw`
  - Runs entirely in the background
  - Terminates automatically after code generation

No terminal interaction or user input is required.

---

### question_requirements.json
This is the **primary configuration file for users**.

To generate code for a new problem:
1. Open `question_requirements.json`
2. Modify the question, dataset path, or dataset name
3. Save the file
4. Double-click `Run.bat`

The engine will generate new Python code automatically based on the updated requirements.

---

### Program_requirements.json
- Stores runtime configuration values required by the system.
- Used to define:
  - Gemini API key for authentication
  - Target folder where generated Python code is saved
- Centralizes environment-specific and sensitive settings to avoid hardcoding them in the source code.

This file typically needs modification only during initial setup or when changing the API key or output location.

---

## Prompt Customization
The prompt used in `main.pyw` is **optimized for college-level and academic use**, ensuring:
- Minimal procedural Python code
- Strict adherence to problem statements
- No unnecessary abstractions or explanations

Users are free to:
- Modify the prompt logic
- Adjust constraints
- Customize it for personal, academic, or advanced use cases

---

## Gemini API Configuration
- The system uses the **Gemini API** for code generation.
- The Gemini model is explicitly defined in `main.pyw`.

Users can:
- Change the Gemini model version
- Switch to another supported Gemini model
- Adapt API usage based on requirements

No architectural changes are required to update the model.

---

## Use Cases
- College assignments and lab work
- Exam-oriented Python practice
- Automated code generation workflows
- Learning prompt-driven AI systems
- Rapid prototyping for data-related tasks

---

## Important Notes
- This project does **not** train or deploy machine learning models
- It relies on **LLM-based program synthesis**
- All outputs are generated and saved automatically
- No datasets are embedded or hardcoded
- Strict data governance rules are enforced

---

## Summary
The **LLM-Based Code Synthesis Engine** demonstrates how Large Language Model APIs can be orchestrated into a **fully automated, policy-constrained code generation system** designed for structured academic environments.