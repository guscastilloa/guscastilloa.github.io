---
layout: page
permalink: /pegthesis/update1/
title: "Tesis PEG: estado actual"
description: "Mercado de especialistas médicos en Colombia. Resumen de avance, septiembre 2026."
nav: false
sitemap: false
---

Esta página acompaña al manuscrito que va adjunto por correo. Es un mapa corto del
estado del trabajo, pensado para orientar la discusión sin depender de leer las 30
páginas completas. El documento se titula *Why Few and Why Here? Specialist Supply and
Location Choice in Colombia*.

---

## 1. La pregunta y la arquitectura del argumento

Colombia tiene un déficit persistente de especialistas médicos, muy concentrado fuera de
las tres áreas metropolitanas principales. La pregunta es si esa escasez refleja
**restricción de entrada por parte de los incumbentes** (H1) o **límites reales de
capacidad de formación** (H2, con una variante de financiamiento H2a).

El problema de fondo es que ambas hipótesis predicen lo mismo en las comparaciones
descriptivas habituales: pocos graduados e ingresos altos para quienes ya tienen el
título. Sólo se distinguen por *cómo responde la oferta de cupos* a cambios en
gobernanza, demanda e infraestructura. Toda la estrategia empírica se organiza alrededor
de esa condición de falsación.

El documento tiene dos ejercicios empíricos: un test causal de la Ley 1797 de 2016
(¿se relajó el cuello de botella?) y un modelo de elección discreta de localización
(¿dónde se ubican los que sí se especializan?).

---

## 2. Lo que está hecho

**Mapeo institucional de la gobernanza de cupos de residencia.** Sistema por capas donde
colegios médicos, universidades y MinSalud/MEN comparten autoridad sobre acreditación y
número de plazas. Por ahora es el activo más sólido del trabajo: esa descripción no
existía para Colombia.

**Tres hechos motivadores.**

| Hecho | Evidencia |
|---|---|
| Salud es un sector internamente muy desigual | CV de 1.335 en GEIH 2024, quinto lugar en desviación acumulada entre industrias |
| La cola alta es la jerarquía médica | Especialistas COP 10.63M/mes vs. generales COP 5.01M, razón 2.12× (2022-2025) |
| La oferta creció, pero sin quiebre | Graduados de 1,077 (2001) a 2,184 (2023); ingresos médicos reales +19.7% entre 2008 y 2023 (pesos constantes de 2023) |

A esto se suma la brecha geográfica que motiva todo el trabajo: 165.5 especialistas por
cada 100,000 habitantes en Bogotá contra 6.2 en Vaupés, una razón de 27 a 1, con una
correlación de -0.50 entre densidad de especialistas y mortalidad tratable a nivel
departamental.

**Test causal de la Ley 1797 de 2016, Art. 23.** Diseño de intención de tratar sobre
instituciones acreditadas por el CNA. Estimador principal PPML con efectos fijos
institución×especialidad y año; Callaway-Sant'Anna como chequeo de tendencias previas y
de signo.

| Estimación | Coeficiente | EE | Lectura |
|---|---|---|---|
| PPML, muestra agrupada | -0.113 | (0.089) | ≈ -10.7%, no significativo |
| CS-DiD, ATT agregado | 0.158 | (0.430) | Sin efecto detectable |
| PPML, especialidades de alta demanda | -0.141 | (0.075) | p ≈ 0.06 |
| CS-DiD, alta tasa de rechazo | -0.352 | (0.154) | p = 0.02 |
| PPML, especialidades de baja demanda | -0.051 | (0.141) | Muy impreciso |

Como evidencia descriptiva complementaria, la tasa de admisión de SNIES
(admitidos/inscritos) lleva plana entre 8% y 10% desde 2007 hasta 2023, sin quiebre en
2016. Aproximadamente uno de cada once aspirantes obtiene un cupo.

**Modelo de elección de localización.** Logit condicional sobre el municipio del primer
empleo formal observado. Los cinco parámetros salen con el signo predicho y muy
precisos.

| Parámetro | Estimación | EE | Interpretación |
|---|---|---|---|
| α, log(salario) | 3.528 | (0.128) | Fuerte respuesta al salario local |
| β, HHI | -4.643 | (0.080) | Evitan mercados con empleadores concentrados |
| γ, log(stock de especialistas) | 0.661 | (0.004) | Aglomeración, se agrupan donde ya hay especialistas |
| ρ, formado en el municipio | -0.814 | (0.047) | Negativo, resultado inesperado |
| φ, log(1+distancia) | -0.624 | (0.008) | Costos de reubicación altos |

N = 45,590 especialistas, J = 100 alternativas, 4.56 millones de observaciones.

**Escrito pero fuera del documento.** Existe una sección de contrafactuales y un bloque
de implicaciones de política en la conclusión, ambos comentados y no incluidos en la
compilación actual. Es una decisión que conviene revisar.

---

## 3. Los datos

El encadenamiento SNIES → ReTHUS → PILA → GEIH no existía para Colombia. Ese pipeline es
una contribución en sí mismo, independientemente de cómo resulten las estimaciones.

| Fuente | Cobertura | Qué aporta |
|---|---|---|
| **SNIES** | 2001-2023 | Embudo completo por programa: inscritos, admitidos, matriculados, graduados, por especialidad, institución y año |
| **ReTHUS** | Corte actual | Registro nacional de talento humano en salud: institución de formación, especialidad, año de grado, municipio de práctica |
| **PILA** | 2011-2019 | Cotizaciones mensuales a seguridad social; municipio de trabajo. Define el evento de elección |
| **GEIH** | 2008-2025 | Ingresos por ocupación, deflactados con IPC DANE a pesos constantes de 2023 |
| **Panel municipal propio** | 1,122 municipios | Mortalidad tratable (EEVV-DANE), infraestructura hospitalaria, intensidad del conflicto (UNODC y CNMH), distancias de Haversine (MGN 2018) |

---

## 4. Debilidades

### 4.1 Reconocidas ya en el documento

- **Potencia estadística del test de Ley 1797.** Sólo cinco instituciones tratadas en la
  cohorte G = 2016. El efecto mínimo detectable al 80% de potencia ronda el 233% en
  términos de cupos. El diseño descarta expansiones enormes, no moderadas.
- **Admitidos no es lo mismo que cupos ofertados.** SNIES no registra plazas anunciadas,
  así que no se puede separar "el programa decidió no expandir" de "expandió y no
  llegaron postulantes calificados".
- **PILA sólo captura empleo formal.** Los especialistas que trabajan por prestación de
  servicios pueden estar subrepresentados, y probablemente de forma no aleatoria en la
  periferia.
- **El logit condiciona en haber especializado.** Si la restricción opera en el margen
  extensivo, disuadiendo la entrada a la especialización, esa sección es muda al
  respecto.

### 4.2 Las dos críticas de fondo del referee

El manuscrito pasó por una revisión automatizada (Coarse.ink, mayo de 2026, veredicto de
*major revision*). Varios señalamientos ya se corrigieron. De los que siguen abiertos,
estos dos son los que realmente importan, y están conectados entre sí.

**1. Las dos etapas empíricas no se conectan entre sí ni con la pregunta central.**
Esta es una crítica de arquitectura, no de ejecución, y es la más seria. El test de la
Ley 1797 no logra discriminar entre H1 y H2 por falta de potencia; el modelo de
localización responde a otra pregunta, dónde van los especialistas y no por qué hay
pocos. La conclusión termina hablando de señales salariales y aglomeración, que se
siguen del segundo ejercicio pero no de la pregunta declarada al inicio. Hay dos salidas
posibles: un modelo estructural de oferta donde los cupos sean endógenos a la densidad
de incumbentes, o reencuadrar el trabajo honestamente como dos contribuciones separadas,
el análisis institucional y el modelo de localización, sin pretender que se resuelve la
hipótesis de restricción.

**2. El marco de hipótesis promete cuatro implicaciones testeables y sólo se lleva una a
los datos.** H1 predice una relación negativa entre densidad de incumbentes y creación
de cupos nuevos. H2a predice expansión más rápida en programas privados. Ambas son
estimables con los datos que ya están en mano: SNIES registra el tipo de institución y
ReTHUS da el stock por especialidad y departamento. Este es el señalamiento más
accionable de todo el reporte, porque cierra la brecha entre el marco teórico y la
evidencia sin necesidad de conseguir datos nuevos.

El resto de los comentarios abiertos (endogeneidad de salarios en el logit, restricción
del conjunto de elección a 100 municipios, ausencia de simulación contrafactual) son
problemas de ejecución dentro de la sección de localización, importantes pero
subordinados a los dos anteriores.

---

<p style="font-size: 0.9em; color: #888;">
Actualizado: 1 de septiembre de 2026. Página de trabajo, no listada en el menú del sitio.
</p>
