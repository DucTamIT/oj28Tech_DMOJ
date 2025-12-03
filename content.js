(function () {
    function parseProblem() {
        const titleElem = document.querySelector('.problem-title h2');
        const title = titleElem ? titleElem.textContent.trim() : 'Unknown Problem';

        const timeLimitElem = document.querySelector('.problem-info-entry .fa-clock-o');
        const timeLimitText = timeLimitElem ? timeLimitElem.nextElementSibling.nextElementSibling.textContent.trim() : '1.0s';
        const timeLimit = parseTimeLimit(timeLimitText);

        const memoryLimitElem = document.querySelector('.problem-info-entry .fa-server');
        const memoryLimitText = memoryLimitElem ? memoryLimitElem.nextElementSibling.nextElementSibling.textContent.trim() : '256M';
        const memoryLimit = parseMemoryLimit(memoryLimitText);

        // Input/Output Parsing
        const tests = [];
        const contentDesc = document.querySelector('.content-description');

        if (contentDesc) {
            // Find all headers that look like input or output
            // DMOJ uses h4, 28tech uses h5. We check both.
            const headers = Array.from(contentDesc.querySelectorAll('h4, h5'));

            const inputs = [];
            const outputs = [];

            headers.forEach(header => {
                const text = header.textContent.trim().toLowerCase();
                // Filter out "Explanation" or other non-test headers if necessary
                if (text.includes('explanation')) return;

                if (text.includes('input') && !text.includes('output')) {
                    inputs.push(header);
                } else if (text.includes('output')) {
                    outputs.push(header);
                }
            });

            // Pair them up
            for (let i = 0; i < inputs.length && i < outputs.length; i++) {
                const inputHeader = inputs[i];
                const outputHeader = outputs[i];

                const inputContent = extractPreContent(inputHeader);
                const outputContent = extractPreContent(outputHeader);

                if (inputContent !== null && outputContent !== null) {
                    tests.push({
                        input: inputContent,
                        output: outputContent
                    });
                }
            }
        }

        return {
            name: title,
            group: '28Tech OJ',
            url: window.location.href,
            interactive: false,
            memoryLimit: memoryLimit,
            timeLimit: timeLimit,
            tests: tests,
            input: {
                type: "stdin"
            },
            output: {
                type: "stdout"
            }
        };
    }

    function extractPreContent(header) {
        let nextElem = header.nextElementSibling;
        // Skip non-PRE elements (like the copy button div)
        while (nextElem && nextElem.tagName !== 'PRE') {
            nextElem = nextElem.nextElementSibling;
        }
        if (nextElem) {
            // DMOJ parser prefers code element if present
            const code = nextElem.querySelector('code');
            return code ? code.textContent : nextElem.textContent;
        }
        return null;
    }

    function parseTimeLimit(text) {
        // text is like "1.0s"
        const match = text.match(/([\d\.]+)s/);
        if (match) {
            return Math.floor(parseFloat(match[1]) * 1000);
        }
        return 1000; // Default 1000ms
    }

    function parseMemoryLimit(text) {
        // text is like "256M"
        const match = text.match(/(\d+)M/);
        if (match) {
            return parseInt(match[1], 10);
        }
        return 256; // Default 256MB
    }

    function injectData() {
        try {
            const data = parseProblem();
            console.log('28Tech Extension: Parsed data', data);

            // 1. Inject JSON for Generic Parser
            const existingJson = document.getElementById('competitive-companion-data');
            if (existingJson) existingJson.remove();

            const container = document.createElement('div');
            container.id = 'competitive-companion-data';
            container.style.display = 'none';
            container.textContent = JSON.stringify(data);
            document.body.appendChild(container);

            // 2. Inject DMOJ-compatible HTML for DMOJ Parser (if active)
            // DMOJ parser looks for h4 with "Sample Input" and "Sample Output"
            const existingDmoj = document.getElementById('dmoj-compatible-data');
            if (existingDmoj) existingDmoj.remove();

            const dmojContainer = document.createElement('div');
            dmojContainer.id = 'dmoj-compatible-data';
            dmojContainer.style.display = 'none';

            data.tests.forEach((test, index) => {
                const num = index + 1;

                const inputHeader = document.createElement('h4');
                inputHeader.textContent = `Sample Input ${num}`;
                dmojContainer.appendChild(inputHeader);

                const inputPre = document.createElement('pre');
                const inputCode = document.createElement('code');
                inputCode.textContent = test.input;
                inputPre.appendChild(inputCode);
                dmojContainer.appendChild(inputPre);

                const outputHeader = document.createElement('h4');
                outputHeader.textContent = `Sample Output ${num}`;
                dmojContainer.appendChild(outputHeader);

                const outputPre = document.createElement('pre');
                const outputCode = document.createElement('code');
                outputCode.textContent = test.output;
                outputPre.appendChild(outputCode);
                dmojContainer.appendChild(outputPre);
            });

            document.body.appendChild(dmojContainer);

            console.log('28Tech Extension: Data injected (JSON and DMOJ-compatible HTML)');
        } catch (e) {
            console.error('28Tech Extension: Error parsing/injecting data', e);
        }
    }

    // Run injection
    injectData();
})();
