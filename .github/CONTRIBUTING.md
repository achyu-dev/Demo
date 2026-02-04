# 🤝 Contributing to Roognis

Thank you for your interest in contributing to Roognis! This document provides guidelines and instructions for setting up your development environment and contributing to our AI-powered educational platform.

<details>
<summary>📚 Table of Contents</summary>

- [🤝 Contributing to Roognis](#-contributing-to-roognis)
- [🚧 Getting Started](#-getting-started)
- [🛠️ Development Environment Setup](#-development-environment-setup)
    - [Prerequisites](#prerequisites)
    - [Setting Up Your Environment](#setting-up-your-environment)
    - [Environment Variables](#environment-variables)
    - [Pre-commit Hooks](#pre-commit-hooks)
- [🧰 Running the Application](#-running-the-application)
- [🧪 Testing and Code Quality](#-testing-and-code-quality)
    - [Pre-commit Hooks](#pre-commit-hooks-1)
    - [Linting & Formatting](#linting--formatting)
- [🧪 Running Tests](#-running-tests)
- [🚀 Submitting Changes](#-submitting-changes)
    - [🔀 Create a Branch](#-create-a-branch)
    - [✏️ Make and Commit Changes](#-make-and-commit-changes)
    - [📤 Push and Open a Pull Request](#-push-and-open-a-pull-request)
- [❓ Need Help?](#-need-help)
- [🔐 Security](#-security)
- [✨ Code Style Guide](#-code-style-guide)
    - [✅ General Guidelines](#-general-guidelines)
    - [📝 Comments & Documentation](#-comments--documentation)
- [🏷️ GitHub Labels](#-github-labels)
- [🧩 Feature Suggestions](#-feature-suggestions)
- [📄 License](#-license)

</details>

## 🚧 Getting Started

We encourage developers to work on their own forks of the repository. This allows you to work on features or fixes without affecting the main codebase until your changes are ready to be merged.

### 🌐 Deployment Environment

We maintain deployment on Netlify:

- **Production**: https://roognis.com
- **Preview**: Automatic deploy previews for all pull requests

### 🔄 Development Workflow

The standard workflow for contributing is as follows:

1. Fork the repository on GitHub and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your branch to your fork on GitHub.
5. Create a Pull Request (PR) against the repository's `main` branch.
6. Wait for review and feedback from the maintainers, address any comments or suggestions.
7. Once approved, your changes will be merged and automatically deployed.

> [!WARNING]
> Please ensure all tests pass and code follows our style guidelines before submitting PRs.

## 🛠️ Development Environment Setup

This section provides instructions for setting up your development environment to work on the Roognis Next.js application.

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended package manager)
- Git

### Setting Up Your Environment

1. **Clone your fork and install dependencies:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/roognis-demo.git
   cd roognis-demo
   pnpm install