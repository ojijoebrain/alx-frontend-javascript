export default function guardrail(mathFunction) {
  const queue = [];

  const executeMathFunction = () => {
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (err) {
      queue.push(err.toString());
    } finally {
      queue.push('Guardrail was processed');
    }
  };

  executeMathFunction();
  return queue;
}
