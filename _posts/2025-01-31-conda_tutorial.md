---
layout: post
title: Using conda for Scientific Computing in Windows
date: 2025-01-31 09:00:00
description: A quick start guide to setting up and using conda for reproducible scientific computing on Windows
tags: tutorials computing-environment reproducibility conda
categories: tutorials
---


_This post was written for a graduate 8 week workshop "Gestión de Proyectos de Investigación y Ciencia Abierta"  I'm teaching on Q1 of 2025._ 

In scientific computing and research, reproducibility is crucial. One of the main tools that helps us achieve this is `conda`, a powerful package and environment management system. This tutorial will guide you through setting up and using conda effectively on Windows, focusing on best practices for scientific computing.

## Installing Miniconda

Rather than installing the full Anaconda distribution, we'll use Miniconda - a lightweight alternative that gives us just what we need. The recommended installation method is through the command line interface (CLI) to practice those essential skills. The installation steps follow the official CLI tutorial from the official [documentation](https://docs.anaconda.com/miniconda/install/).

### Steps

1. Open Windows PowerShell and run these commands:

```powershell
wget "https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe" -outfile ".\miniconda.exe"
Start-Process -FilePath ".\miniconda.exe" -ArgumentList "/S" -Wait
del .\miniconda.exe
```

2. Once installed, open the **Anaconda PowerShell Prompt** from your Start Menu
3. Verify your installation by running:

```bash
conda --version
```

You should see something like:

```powershell
(base) PS C:\Users\USER> conda --version
conda 24.11.1
```

### Understanding Your Shell Prompt

That `(base) PS C:\Users\USER>` line is your shell's prompt. Let's break it down:

- `(base)`: Shows your active conda environment (base is default)
- `PS`: Indicates you're in PowerShell
- `C:\Users\USER>`: Shows your current directory

## Managing Environments

Environments are isolated spaces where you can install specific versions of packages without affecting other projects. Here's how to work with them:

### Creating a New Environment

```bash
conda create --name my_env python=3.11 numpy scipy matplotlib
```

This creates an environment called `my_env` with Python 3.11 and some essential scientific packages: `numpy`, `scipy` and `matplotlib`. 


### Activating and Deactivating
The following commands are used to activate and desactivate the environment. Activating an environment means that exerucing 

```bash
# Activate
conda activate my_env

# Deactivate when you're done
conda deactivate
```

Recall that the active environment is displayed in the prompt. If we had activated `(my_env)` the prompt would look like

```powershell
(my_env) PS C:\Users\USER> 
```

### Deleting environments

If you wish to delete the environment `my_env` we created previously you first need to deactivate it (get out of it) with `conda deactivate`. Afterwards using the `conda remove` command you can delete it. For example:

```bash
# To delete the environment and all its associated packages
conda remove --name my_env --all 
```


### Environment Management Commands

```bash
# List all environments
conda env list

# Export environment configuration
conda env export > environment.yml

# Recreate environment from file
conda env create -f environment.yml
```


## Package Management

Managing packages in conda is straightforward:

```bash
# Install packages
conda install pandas seaborn

# Remove packages
conda remove seaborn

# Update packages
conda update numpy

# Search for packages
conda search scikit-learn
```

## Advanced Tips

### Using mamba for Speed

If you find conda slow, try mamba - it's a faster alternative:

```bash
# Install mamba
conda install -n base -c conda-forge mamba

# Use mamba instead of conda
mamba install pandas
```

### Setting Up conda-forge

The conda-forge channel provides more up-to-date packages:

```bash
conda config --add channels conda-forge
conda config --set channel_priority strict
```

## Best Practices for Scientific Computing

Although in the course we expanded a lot more on tools and practices, a quick overview of low hanging fruit recommendations to start implementing right away are:

1. **Always use environment files**: Document your environment with `environment.yml`
2. **Use specific versions**: Specify exact versions of critical packages like `matplotlib=1.4.3`.
3. **Keep environments minimal**: Only install what you need
4. **Document everything**: Include README files explaining your environment setup
5. **Use version control**: Track your environment files using git, and when collaborating, GitHub.


## Conclusion

Using conda effectively is key to maintaining reproducible scientific computing workflows. By following these practices, you'll have a robust and reproducible environment for your research.

## Additional Resources

- [Official conda documentation](https://docs.conda.io/)
- [conda-forge](https://conda-forge.org/)
- [Miniconda installation guide](https://docs.anaconda.com/miniconda/)

_Note: This tutorial was last updated on January 31, 2025. Please check the official documentation for the most recent information._
