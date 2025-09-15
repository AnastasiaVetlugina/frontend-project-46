### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnastasiaVetlugina/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnastasiaVetlugina/frontend-project-46/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AnastasiaVetlugina_frontend-project-462&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=AnastasiaVetlugina_frontend-project-462)

# Вычислитель отличий 

Утилита командной строки для сравнения конфигурационных файлов JSON и YML/YAML. Поддерживает три формата вывода: древовидный (stylish), текстовый (plain) и машиночитаемый JSON. Позволяет анализировать как плоские, так и вложенные структуры данных через CLI или программный интерфейс.

## Установка 
1. Клонирование репозитория
```
git clone git@github.com:AnastasiaVetlugina/frontend-project-46.git
```

2. Установка зависимостей
```
make install
```

## Базовые команды

#### Сравнение JSON файлов (формат по умолчанию)

```
gendiff file1.json file2.json
```
[![asciicast](https://asciinema.org/a/ffzjEJ2TrwBKG6ExtQ8Wp4wcQ.svg)](https://asciinema.org/a/ffzjEJ2TrwBKG6ExtQ8Wp4wcQ)

#### Сравнение YAML в текстовом формате

```
gendiff --format plain file1.yml file2.yml
```
[![asciicast](https://asciinema.org/a/jYhFg4W3nAq2opihC6ri4iMRI.svg)](https://asciinema.org/a/jYhFg4W3nAq2opihC6ri4iMRI)

#### Сравнение с JSON выводом

```
gendiff -f json file1.yml file2.yml
```
[![asciicast](https://asciinema.org/a/MK7YMEq73BhYyko5CQ2ZmSnzb.svg)](https://asciinema.org/a/MK7YMEq73BhYyko5CQ2ZmSnzb)

