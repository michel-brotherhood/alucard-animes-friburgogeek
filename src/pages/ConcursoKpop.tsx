import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Users, DollarSign, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import kpopBackground from "@/assets/kpop-background.jpg";

const formSchema = z.object({
  nomeGrupo: z.string().min(3, "Nome do grupo deve ter no mínimo 3 caracteres").max(100),
  lider: z.string().min(3, "Nome do líder é obrigatório").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  chave: z.string().min(1, "Selecione uma chave"),
  numeroIntegrantes: z.string().min(1, "Número de integrantes é obrigatório"),
  musica: z.string().min(2, "Nome da música é obrigatório").max(200),
  artista: z.string().min(2, "Nome do artista é obrigatório").max(200),
  integrantes: z.string().min(10, "Liste todos os integrantes").max(500),
  descricao: z.string().max(1000, "Descrição muito longa").optional(),
});

const ConcursoKpop = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeGrupo: "",
      lider: "",
      email: "",
      telefone: "",
      chave: "",
      numeroIntegrantes: "",
      musica: "",
      artista: "",
      integrantes: "",
      descricao: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'friburgogeek@alucardanimes.com.br',
          subject: 'Nova Inscrição - Campeonato K-Pop',
          formData: values,
          formType: 'Campeonato K-Pop'
        }
      });

      if (error) throw error;

      toast({
        title: "Inscrição enviada!",
        description: "Você receberá um email de confirmação em breve.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar inscrição",
        description: "Por favor, tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    }
  };

  const chaves = [
    { value: "old-school", label: "Chave Old School (1ª e 2ª Gerações)" },
    { value: "middle-school", label: "Chave Middle School (3ª Geração)" },
    { value: "new-school", label: "Chave New School (4ª e 5ª Gerações)" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title="Campeonato K-Pop 2025 - Batalha das Gerações"
        description="Campeonato K-Pop no Friburgo Geek: Batalha das Gerações com 3 chaves (Old School, Middle School, New School). Premiação de R$ 400 por chave. Grupos de 3 a 10 integrantes. Inscreva-se!"
        canonical="/concursos/kpop"
        keywords="campeonato k-pop, batalha gerações k-pop, cover k-pop, dança k-pop, Nova Friburgo, Friburgo Geek"
      />
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${kpopBackground})`,
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-secondary opacity-75" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CAMPEONATO K-POP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Batalha das Gerações - Mostre o poder do seu grupo! 🎤
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">R$ 400,00 por chave</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Integrantes</h3>
                <p className="text-white/80 text-sm">Grupos de 3 a 10 pessoas</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Data do Evento</h3>
                <p className="text-white/80 text-sm">15 de Março de 2026</p>
              </CardContent>
            </Card>
          </div>

          {/* Regras Completas */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 REGRAS DO K-POP BATALHA DAS GERAÇÕES</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-6">
              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">1) REGRAS GERAIS</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>1.1</strong> – As inscrições serão realizadas somente pelo formulário desta página. Não aceitaremos inscrições no dia do evento ou após o prazo</li>
                  <li><strong>1.2</strong> – O uso de palavrões, apelo sexual desnecessário ou abusivo, ofensas a qualquer pessoa, apologia ao uso de drogas, preconceito ou racismo resultam na desclassificação do concorrente</li>
                  <li><strong>1.3</strong> – Apresentações que desrespeitem qualquer artigo ou disposição criminal vigentes nas leis brasileiras são de responsabilidade do(s) autor(es)</li>
                  <li><strong>1.4</strong> – É proibida a utilização de armas (de fogo ou brancas) e acessórios que possam colocar em risco os presentes no evento</li>
                  <li><strong>1.5</strong> – Serão aceitas inscrições de covers de grupos com o limite de até 10 (dez) integrantes. Todas as equipes serão julgadas com o mesmo rigor independentemente do número de participantes</li>
                  <li><strong>1.6</strong> – As inscrições começam dia 22/09/2025 e vão até o dia 12/12/2025 às 00:00hs</li>
                  <li><strong>1.7</strong> – Após a inscrição, os integrantes de uma equipe só poderão ser alterados (acrescidos ou subtraídos) ATÉ o fechamento das inscrições</li>
                  <li><strong>1.8</strong> – Após o fechamento das inscrições, os integrantes de uma equipe só poderão ser subtraídos, jamais acrescidos ou alterados</li>
                  <li><strong>1.9</strong> – Cada grupo deverá ter expressamente 1 (um) representante relatado na inscrição com todos os dados solicitados. Quanto aos demais participantes, deverão informar: Nome completo, idade e telefone para contato</li>
                  <li><strong>1.10</strong> – Menores de idade deverão apresentar documento de autorização de imagem disponível no site, assinado pelos pais ou representantes legais no momento da inscrição</li>
                  <li><strong>1.11</strong> – Será apenas modalidade grupo (3 a 10 participantes)</li>
                  <li><strong>1.12</strong> – Os grupos poderão competir no MÁXIMO duas chaves da competição. Desta maneira, o pagamento de inscrição deverá ser realizado proporcionalmente para cada chave que competir</li>
                  <li><strong>1.13</strong> – As vagas são limitadas. A inscrição é gratuita, mas garante a entrada de até 5 participantes ao evento. Participantes adicionais devem adquirir seus ingressos normalmente</li>
                  <li><strong>1.14</strong> – A inscrição inclui a entrada no evento para até 5 integrantes</li>
                  <li><strong>1.15</strong> – Em caso de desistência, não há reembolso</li>
                  <li><strong>1.16</strong> – O Campeonato será realizado no dia 14 DE DEZEMBRO DE 2025, NO SINDICATO DOS TEXTEIS, CENTRO DE NOVA FRIBURGO a partir das 14 horas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">2) SOBRE AS MÚSICAS</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>2.1</strong> – As músicas para a apresentação deverão estar no formato MP3 salvas em um pen-drive somente (tendo em vista que qualquer erro no equipamento trazido é de responsabilidade do grupo)</li>
                  <li><strong>2.2</strong> – A organização adverte: "Os participantes deverão apresentar boa qualidade nas músicas a serem usadas no campeonato". A organização não se responsabiliza por áudios danificados ou com volume ruim</li>
                  <li><strong>2.3</strong> – O tempo máximo de apresentação é de 5 minutos</li>
                  <li><strong>2.4</strong> – É permitido adaptar/alterar as coreografias desde que 50% da apresentação ainda seja original</li>
                  <li><strong>2.5</strong> – Não será permitida a apresentação de pessoas embriagadas ou sob efeito de entorpecentes</li>
                  <li><strong>2.6</strong> – A ordem de apresentação no evento será definida pela organização e anunciada aos representantes dos grupos no dia do evento</li>
                  <li><strong>2.7</strong> – Os grupos deverão realizar Check-in até às 13h no local do evento, onde também entregarão a música em um pen-drive somente. O Check-in será realizado em um local a ser informado no C.A.V do evento</li>
                  <li><strong>2.8</strong> – A confirmação da participação será mediante a confirmação de inscrição e o aceite do grupo nas informações dos termos de responsabilidades</li>
                  <li><strong>2.9</strong> – Os participantes que não estiverem presentes ao serem chamados para subir no palco serão colocados em último lugar na lista. Caso não estejam presentes na segunda chamada, serão considerados como desistentes e desclassificados</li>
                  <li><strong>2.10</strong> – Não é permitido nada que suje o palco ou prejudique a apresentação dos outros participantes. Qualquer objeto utilizado ou a necessidade de uma iluminação específica na apresentação devem ser informadas previamente à organização</li>
                  <li><strong>2.11</strong> – O grupo deverá entregar o palco após a sua apresentação livre de objetos e pessoas, em tempo para a próxima apresentação</li>
                  <li><strong>2.12</strong> – É expressamente proibido o uso de quaisquer acessórios, equipamentos, cenários etc., que possam causar danos à empresa realizadora do evento, ao local do evento, ao público e aos grupos seguintes. Em qualquer hipótese o grupo que desrespeitar será obrigado a indenizar imediatamente o sujeito passivo e poderá ser desclassificado se os jurados assim entenderem</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">3) GERAÇÕES DO K-POP</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="font-bold text-white mb-1">1ª Geração (Meados dos anos 90 – 2003)</p>
                    <p>Início do K-pop, com grupos como Seo Taiji & Boys, que trouxeram influências estrangeiras, como rap, rock e techno, para a música coreana.</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="font-bold text-white mb-1">2ª Geração (2003 – 2012)</p>
                    <p>Expansão do K-pop, com a internacionalização e o surgimento de grupos populares como TVXQ, Super Junior, Girls' Generation, SHINee e 2PM.</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="font-bold text-white mb-1">3ª Geração (2012 – 2017)</p>
                    <p>Consolidação do K-pop como um fenômeno global, com grupos como EXO, BTS, GOT7, MAMAMOO, Red Velvet e TWICE.</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="font-bold text-white mb-1">4ª Geração (2018 – 2022)</p>
                    <p>Crescimento ainda maior do K-pop, com o surgimento de grupos como Stray Kids, (G)I-DLE, ATEEZ, ITZY, TOMORROW X TOGETHER e aespa.</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="font-bold text-white mb-1">5ª Geração (2023 – presente)</p>
                    <p>Nova geração iniciada em 2023, com grupos como ZEROBASEONE, RIIZE e BABYMONSTER considerados pioneiros, conforme a Billboard Philippines.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">4) CRITÉRIO DE JULGAMENTO</h4>
                <p className="text-sm mb-2"><strong>4.1</strong> – Será composta por até 3 (três) jurados previamente selecionados pela organização. Em caso de empate não previsto no regulamento, o presidente da comissão julgadora terá a palavra final.</p>
                <ul className="list-decimal list-inside space-y-1 text-sm ml-4">
                  <li>ORIGINALIDADE – PESO: 2</li>
                  <li>EXPRESSÃO ARTÍSTICA – PESO: 2</li>
                  <li>SINCRONIA – PESO: 2</li>
                  <li>FIGURINO – PESO: 2</li>
                  <li>PRESENÇA DE PALCO – PESO: 2</li>
                  <li>Cálculo da nota final: 4.1.1 + 4.1.2 + 4.1.3 + 4.1.4 + 4.1.5 = 10</li>
                </ul>
                <p className="text-sm mt-2"><strong>4.2</strong> – Em caso de empate, fica sobre critério do júri optar por uma pontuação justificável para o desempate, sem ser contestado</p>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">5) PREMIAÇÃO</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>5.1</strong> – Premiações em dinheiro para os vencedores de cada chave:
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>• Chave Old School – 1ª e 2ª Gerações do Kpop – R$ 400,00</li>
                      <li>• Chave Middle School – 3ª Geração do Kpop – R$ 400,00</li>
                      <li>• Chave New School – 4ª e 5ª Gerações do Kpop – R$ 400,00</li>
                    </ul>
                  </li>
                  <li><strong>5.2</strong> – Caso não tenha completado o mínimo de 5 grupos por categoria, os grupos serão mesclados a outras categorias até obter o mínimo de 5 grupos para o início do campeonato</li>
                  <li><strong>5.3</strong> – Caso o campeonato não alcance o mínimo de 5 grupos em qualquer das categorias, a premiação será reduzida em 50% ao valor da premiação inicial</li>
                </ul>
              </div>

              <div className="bg-accent/20 border-2 border-accent rounded-lg p-4">
                <h4 className="font-bold text-accent mb-3 text-lg">💰 INFORMAÇÕES IMPORTANTES</h4>
                <p className="text-white text-sm"><strong>Valor da Inscrição:</strong> R$ 400,00 por chave</p>
                <p className="text-white/80 text-sm mt-2">O pagamento deverá ser realizado proporcionalmente para cada chave que o grupo competir.</p>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Inscrição */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-black text-center">
                FORMULÁRIO DE INSCRIÇÃO
              </CardTitle>
              <p className="text-white/80 text-center">Preencha os dados do grupo abaixo</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nomeGrupo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Grupo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do grupo K-Pop" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Líder *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome completo do líder" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@exemplo.com" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="chave"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Chave de Competição *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30 placeholder:text-white/70">
                                <SelectValue placeholder="Selecione a chave" className="placeholder:text-white/70" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {chaves.map((chave) => (
                                <SelectItem key={chave.value} value={chave.value}>
                                  {chave.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="numeroIntegrantes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Número de Integrantes *</FormLabel>
                          <FormControl>
                            <Input type="number" min="3" max="10" placeholder="3 a 10" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="musica"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome da Música *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da música K-Pop" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="artista"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Artista Original *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do artista/grupo original" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="integrantes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Lista de Integrantes *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Liste todos os integrantes (nome completo, um por linha)"
                            className="bg-white/20 text-white border-white/30 placeholder:text-white/70 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Descrição da Apresentação (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva brevemente a coreografia e o conceito da apresentação"
                            className="bg-white/20 text-white border-white/30 placeholder:text-white/70 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                    <p className="text-white/90 text-sm font-bold">⚠️ Informações Importantes:</p>
                    <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                      <li>Inscrição GRATUITA</li>
                      <li>A inscrição garante entrada no evento para até 5 integrantes</li>
                      <li>Integrantes adicionais devem adquirir ingressos normalmente</li>
                      <li>Você receberá confirmação por email após o envio</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    ENVIAR INSCRIÇÃO
                  </Button>

                  <div className="text-center bg-white/5 rounded-lg p-4 md:p-6">
                    <p className="text-white/90 text-sm md:text-base">
                      Dúvidas? {" "}
                      <a 
                        href="mailto:friburgogeek@alucardanimes.com.br?subject=Dúvida%20-%20Campeonato%20K-Pop"
                        className="text-accent hover:text-accent/80 underline font-semibold transition-colors"
                      >
                        Fale com a equipe Alucard
                      </a>
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

        <Footer />
        <FloatingMenu />
      </div>
    </div>
  );
};

export default ConcursoKpop;
