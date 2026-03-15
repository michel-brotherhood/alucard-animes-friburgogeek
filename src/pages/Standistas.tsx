import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import MapSection from "@/components/MapSection";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Store, Package, Users, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nomeEmpresa: z.string().min(3, "Nome da empresa deve ter no mínimo 3 caracteres").max(200),
  nomeResponsavel: z.string().min(3, "Nome do responsável deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  cnpj: z.string().optional(),
  tipoProduto: z.string().min(3, "Descreva o tipo de produto").max(200),
  tamanhoEstande: z.string().min(1, "Selecione o tamanho do estande"),
  observacoes: z.string().max(1000, "Observações muito longas").optional(),
});

const Standistas = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeEmpresa: "",
      nomeResponsavel: "",
      email: "",
      telefone: "",
      cnpj: "",
      tipoProduto: "",
      tamanhoEstande: "",
      observacoes: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Save to database
      await supabase.from('form_submissions').insert({
        form_type: 'standista',
        form_data: values as unknown as Record<string, unknown>,
        email: values.email,
      });

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'friburgogeek@alucardanimes.com.br',
          subject: 'Nova Solicitação - Estande de Vendas',
          formData: values,
          formType: 'Solicitação de Estande'
        }
      });

      if (error) throw error;

      toast({
        title: "Solicitação enviada!",
        description: "Você receberá um email de confirmação em breve.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-primary to-secondary">
      <SEO 
        title="Standistas - Seja um Expositor no Friburgo Geek 2025"
        description="Seja um expositor no Friburgo Geek Natal 2025! Stands de 2m, 3m e 4m disponíveis. Oportunidade única para vender produtos geek, anime, cosplay e cultura pop. Inscreva-se!"
        canonical="/standistas"
        keywords="expositor Friburgo Geek, stand evento geek, vender produtos anime, expositor Nova Friburgo"
      />
      <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            SEJA UM EXPOSITOR
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Faça parte do Friburgo Geek e venda seus produtos! 🏪
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Store className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Espaço Privilegiado</h3>
                <p className="text-white/80 text-sm">Local estratégico no evento</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Grande Público</h3>
                <p className="text-white/80 text-sm">Milhares de visitantes</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Package className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Flexibilidade</h3>
                <p className="text-white/80 text-sm">Diversos tamanhos de estande</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Ótimo Custo-Benefício</h3>
                <p className="text-white/80 text-sm">Valores competitivos</p>
              </CardContent>
            </Card>
          </div>

          {/* Mapa do Local */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-6">LOCALIZAÇÃO DO EVENTO</h2>
            <MapSection />
          </div>

          {/* Formulário de Solicitação */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-black text-center">
                FORMULÁRIO DE SOLICITAÇÃO
              </CardTitle>
              <p className="text-white/80 text-center">Preencha os dados abaixo para solicitar seu estande</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nomeEmpresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome da Empresa/Marca *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da sua empresa" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nomeResponsavel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Responsável *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
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
                            <Input type="email" placeholder="seu@email.com" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
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
                          <FormLabel className="text-white">Telefone/WhatsApp *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cnpj"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">CNPJ (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="00.000.000/0000-00" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tipoProduto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Tipo de Produto *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Camisetas, Action Figures, Artesanato..." {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tamanhoEstande"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Tamanho do Estande Desejado *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 2x2m, 3x3m, etc." {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="observacoes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Observações (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Alguma informação adicional, necessidades especiais, etc."
                            className="bg-white/20 text-white border-white/30 placeholder:text-white/70 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                    <p className="text-white/90 text-sm font-bold">📋 Importante:</p>
                    <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                      <li>Valores e disponibilidade serão informados por email</li>
                      <li>O pagamento deverá ser realizado para confirmar a reserva</li>
                      <li>Entre em contato conosco para dúvidas sobre infraestrutura</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    SOLICITAR ESTANDE
                  </Button>

                  <div className="text-center bg-white/5 rounded-lg p-4 md:p-6">
                    <p className="text-white/90 text-sm md:text-base">
                      Dúvidas? {" "}
                      <a 
                        href="mailto:friburgogeek@alucardanimes.com.br?subject=Dúvida%20-%20Estande%20de%20Vendas"
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
  );
};

export default Standistas;
