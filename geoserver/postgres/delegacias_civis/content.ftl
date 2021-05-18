<div style="border-style: solid;border-width: 1px;background-color: white;padding-right: 5px">
	<#list features as feature>
	  <ul>
	      <li>Nome: ${feature.nome.value}</li>
	      <li>Endereco: ${feature.endereco.value}</li>
	      <li>Telefone: ${feature.telefone.value}</li>
		  <li>Email: ${feature.email.value}</li>
	  </ul>
	</#list>
</div>