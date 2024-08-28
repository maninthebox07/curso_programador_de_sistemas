function separar(texto, separador) {
	return texto.split(separador);
}

// 1. separe uma frase em palavras:
// C1
console.log(separar("O rato roeu a roupa do rei de Roma", " "));
// C2
console.log(separar("JavaScript é incrível", " "));
// C3
console.log(separar("Eu gosto de programar", " "));
console.log();

// 2. separe uma lista de nomes:
// C4
console.log(separar("João,Maria,José", ","));
// C5
console.log(separar("Ana,Paulo,Carla", ","));
// C6
console.log(separar("Luís,Fernanda,Marcos", ","));
console.log();

// 3. extraia os domínios de uma lista de e-mails:
// C7
console.log(separar("user1@gmail.com;user2@yahoo.com;user3@outlook.com", ";"));
// C8
console.log(separar("contato@empresa.com;suporte@site.com", ";"));
// C9
console.log(separar("admin@org.org;info@site.org", ";"));
console.log();

// 4. Separe um texto usando um delimitador longo
// C10
console.log(separar("Nome -- Sobrenome -- Idade -- País", " -- "));
// C11
console.log(separar("Item 1 -- Item 2 -- Item 3 -- Item 4", " -- "));
// C12
console.log(separar("Rua A -- Bairro B -- Cidade C -- Estado D", " -- "));
console.log();

// 5. separe um caminho de diretório:
// C13
console.log(separar("/usr/local/bin", "/"));
// C14
console.log(separar("/home/user/documents", "/"));
// C15
console.log(separar("/var/www/html", "/"));
console.log();

// 6. separe uma frase em letras:
// C16
console.log(separar("JavaScript", ""));	
// C17
console.log(separar("Eu gosto de programar", ""));	
// C18
console.log(separar("Olá Mundo", ""));	
console.log();

// 7. separe um parágrafo em uma lista de frases:
// C19
console.log(separar("O sol está brilhando. O céu está azul. É um ótimo dia!", ". "));
// C20
console.log(separar("Programar é divertido. Pratique todos os dias.", ". "));
// C21
console.log(separar("Olá. Como vai você?", ". "));
console.log();

// 8. extraia o dia, mês e ano de uma data:
// C22
console.log(separar("15/08/2024", "/"));
// C23
console.log(separar("01/01/2020", "/"));
// C24
console.log(separar("31/12/1999", "/"));
console.log();

// 9. extraia horas, minutos e segundos de um horário:
// C25
console.log(separar("14:35:20", ":"));
// C26
console.log(separar("09:05:15", ":"));
// C27
console.log(separar("23:59:59", ":"));
console.log();

// 10. separe as linhas de um texto com múltiplas linhas:
// C28
console.log(separar("Primeira linha\nSegunda linha\nTerceira linha", "\n"));
// C29
console.log(separar("Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.", "\n"));
// C30
console.log(separar("Linha única sem quebras", "\n"));
// C31
console.log(separar(`Primeira linha de um texto. Segunda linha usando template strings.
Terceira linha com mais detalhes.`, "\n"));
// C32
console.log(separar(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
minim veniam.`, "\n"));
// C33
console.log(separar(`Texto com linhas múltiplas e uso de templates strings para
separação.`, "\n"));