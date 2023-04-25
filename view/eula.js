import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default class Eula extends Component{
  constructor(props){
    super(props);
        this.state={
          

    }
  }




render(){
  let app = this.props.app;
  let state = app.state;
  let styles =state.styles;
  let dispatch = app.dispatch;
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:"100%",
    width:'100%',
    display:'flex',
    alignItems:"center",
    position:'absolute',
    top:60,
    zIndex:1000
  };
  
        return(
          <View style={backgroundStyle}>
             
        <SafeAreaView style={{zIndex:1002, marginTop:5,  background:"white",
        width:"90%",
        display:'flex',
        height:"80%",
        alignItems:"center",
        marginTop:20 }}>
            <ScrollView  >
                  <View style={{
                 justifyContent:"center", alignSelf:"center", alignContent:"center",
                width:"100%", alignSelf:"center",
                padding:5,
                paddingLeft:3,
                background:"#FBFFFF",
    
                }}> 
                 <Text>Terms and Conditions</Text>
                         {/* Header */}
                        <Text style={{ marginTop:10, padding:4,}} >
                        Welcome to Spawn!
                        </Text>
                                            {/* BODY */}
                                            <Text style={{ marginTop:5,  width:300,padding:4,marginLeft:5}} >
                                                These Terms of Use or "Terms" govern your use of Spawn and provide
                        information about the Spawn Service the "Service", outlined below. When you
                        create a Spawn account or use Spawn, you agree to these terms. 
                                            </Text>
                                            {/* BODY */}
                                            <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                The Spawn Service is provided to you by AVA Games and Entertainment LLC. These Terms of Use, therefore, constitute an agreement between you and AVA Games and Entertainment LLC, Inc.
                                            </Text>
                        {/* Header */}
                        <Text style={{ marginTop:5, padding:4,}} >
                        The Spawn Service
                        </Text>
                                            {/* BODY */}
                                            <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                            We agree to provide you with the Spawn Service. The Service includes all of the Spawn products, features, applications, services, technologies, and software that we provide.
                                                
                                            </Text>

                                            {/* BODY */}
                                            <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                The Service is made up of the following aspects:
                                            </Text>

                                                {/* Points */}
                                                <View style={{paddingLeft:20}}>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Ability to create, share, curate, and follow the ideas, design, artwork, and content of a community focused on the Role-Playing Game industry. 
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Enable and deliver a content feed from our community of users who share passion and interest in role-playing games.  
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Minimize and eliminate irrelevant and harmful content outside of the core focus or theme of the Service.                                                 </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Enable creators to grow their presence on the platform, develop followers, and meeasure the community's engagement with their theme-specific content.                                                 </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Promote theme-related content to a dedicated audience with shared interests.                                                 </Text>
                                                </View>
                        {/* Header */}
                        <Text style={{ marginTop:5, padding:4,}} >
                        User Responsibilities and Fees:
                        </Text>
                                {/* Header2*/}
                                <Text style={{ marginTop:5,  width:300,padding:4,marginLeft:5}} >
                                Authorized Users/Spawners:
                                            </Text>
                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    Certain authorized users pay a fee to access and utilize some features of the Spawn services. These users who are authorized to post (or “spawn”) content into the network, are called “Spawners.” Spawners pay a fee to publish content into the network, establish a network of followers, and receive analytics on engagement with their Spawns in the network. Spawners pay a fee to support the operations of the network, ensure theme-specific content without influence from outside advertising or promotion of unrelated products and services, and self-promote theme-specific products and services to the community.
                                    </Text>

                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    Spawners must adhere to the following requirements to maintain their authorized role in the community:
                                    </Text>
                                    <View style={{paddingLeft:20}}>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Spawners agree to only publish images, videos, and content that relate to Role Playing Games, Artwork, Games, Video Gaming, Comics, Fantasy, and Science Fiction.
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Spawners agree to only post promotional content that is directly related to role-playing games, and RPG-related artwork, products, or services. </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Spawners agree they will never post pornographic content. </Text>      
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Spawners agree that they will not post content that is damaging, offensive, racist, or derogatory to any group or individual. </Text>                                                  
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Spawners agree that they will not post content that promotes a political purpose. 
                                                    </Text>
                                                </View>
                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    By creating a Spawn account or using the Spawn Service, Authorized Users, or Spawners, agree to these rules and prohibitions. 
                                    </Text>

                                {/* Header2 */}
                                <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                General Users (Users):
                                </Text>

                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    General Users of the Spawn service do not pay a fee to access or use the baseline features of Spawn. General users of the Spawn service enjoy content from Spawners who are authorized to create and publish content. General users can become Authorized Users, or Spawners, at any time they would like to upgrade. General Users who upgrade to Authorized Users agree to the regulations, prohibitions, and requirements defined for Authorized Users above.
                                    </Text>

                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    General users agree to and must adhere to the following requirements to maintain their membership: 
                                    </Text>

                                    <View style={{paddingLeft:20}}>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Users agree that they will not post content that is damaging, offensive, racist, or derogatory to any group or individual. 
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Users agree they will not post content that is pornographic.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - Users agree they will not post content that promotes a political purpose.
                                                     </Text>
                                            </View>
                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    AVA Games and Entertainment LLC reserves the sole right to determine the status of any content posted to the platform. The company reserves, in its sole discretion, the right to remove, restrict, or ban any content or user for any reason.
                                    </Text>
                        {/* Header */}
                        {/* <div style={{ marginTop:5, padding:4,}} >
                        The Data Policy
                        </div> */}

                        {/* Header */}
                        <Text style={{ marginTop:5, padding:4,}} >
                        Your Commitments
                        </Text>
                                {/* BODY */}
                                <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                In return for our commitment to provide the Service, we require you to make the below commitments to us.
                                    </Text>
                                    <View style={{paddingLeft:20}}>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You must be at least 13 years old. 
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You must not be prohibited from receiving any aspect of our Service under applicable laws.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - We must not have previously disabled your account for violation of law or any of our policies.
                                                     </Text>
                                            </View>
                        {/* Header */}
                        <Text style={{ marginTop:5, padding:4,}} >
                        The following detail user actions and modes of use that are prohibited using the Spawn services:
                        </Text>
                        <View style={{paddingLeft:20}}>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Spawn, but you must provide us with accurate and up-to-date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't do anything unlawful, misleading, or fraudulent or for an illegal or unauthorized purpose.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't violate or help or encourage others to violate these Terms or our policies.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't do anything to interfere with or impair the intended operation of the Service. This includes misusing any reporting, dispute, or appeals channel, such as by making fraudulent or groundless reports or appeals.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't attempt to create accounts or access or collect information in unauthorized ways. This includes creating accounts or collecting information in an automated way without our express permission.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't sell, license, or purchase any account or data obtained from us or our Service. This includes attempts to buy, sell, or transfer any aspect of your account (including your username); solicit, collect, or use login credentials of other users.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent your own or have obtained all necessary rights to the content you post or share. 
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't modify, translate, create derivative works of, or reverse engineer our products or their components.
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You can't use a domain name or URL in your username without our prior written consent.
                                                     </Text>
                                            </View>
                        {/* Header */}
                        <Text style={{ marginTop:5, padding:4,}} >
                        Permissions
                        </Text>
                                    {/* BODY */}
                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                    As part of our agreement, you give us certain permissions that we need to provide the Service.
                                    </Text>
                                    <View style={{paddingLeft:20}}>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     We do not claim ownership of your content, but you grant us a license to use it: Nothing is changing about your rights in your content. We do not claim ownership of your content that you post on or through the Service and you are free to share your content with anyone else, wherever you want. However, we need certain legal permissions from you (known as a “license”) to provide the Service. When you share, post, or upload content that is covered by intellectual property rights (like photos or videos) on or in connection with our Service, you hereby grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your content (consistent with your privacy and application settings). This license will end when your content is deleted from our systems. 
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     You agree that we can download and install updates to the Service on your device.
                                                     </Text>
                                            </View>
                            {/* Header */}
                            <Text style={{ marginTop:5, padding:4,}} >
                            Additional Rights We Retain
                            </Text>
                            <View style={{paddingLeft:20}}>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     -If you select a username or similar identifier for your account, we may change it if we believe it is appropriate or necessary (for example, if it infringes someone's intellectual property or impersonates another user).
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     -If you use content covered by intellectual property rights that we have and make available in our Service (for example, images, designs, videos, or sounds we provide that you add to content you create or share), we retain all rights to our content (but not yours).
                                                     </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     -You can only use our intellectual property and trademarks or similar marks with our prior written permission.
                                                     </Text>
                                            </View>
                            {/* Header */}
                            <Text style={{ marginTop:5, padding:4,}} >
                            Content Removal and Disabling or Terminating Your Account
                            </Text>
                            <View style={{paddingLeft:20}}>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies or we are permitted or required to do so by law. We can refuse to provide or stop providing all or part of the Service to you immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies, if you infringe other people's intellectual property rights, or where we are permitted or required to do so by law.                                                      
                                                    </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - We can also terminate or change the Service, remove or block content or information shared on our Service, or stop providing all or part of the Service if we determine that doing so is reasonably necessary to avoid or mitigate adverse legal or regulatory impacts on us.
                                                    </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - When you request to delete content or your account, the deletion process will automatically begin no more than 30 days after your request. It may take up to 90 days to delete content after the deletion process begins.
                                                     </Text>
                                            </View>
                            {/* Header */}
                            <Text style={{ marginTop:5, padding:4,}} >
                            Our Agreement
                            </Text>
                            <View style={{paddingLeft:20}}>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - If any aspect of this agreement is unenforceable, the rest will remain ineffect.
                                                    </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - Any amendment or waiver to our agreement must be in writing and signed by us. If we fail to enforce any aspect of this agreement, it will not be a waiver.
                                                    </Text>
                                                     <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                     - We reserve all rights not expressly granted to you.
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Our past, present, and future affiliates and agents can invoke our rights under this agreement in the event they become involved in a dispute.
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - You cannot transfer your rights or obligations under this agreement without our consent.
                                                    </Text>
                                                    <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                    - Our rights and obligations can be assigned to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law.
                                                   </Text>
                                                   <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                   - Our Service is provided "as is," and we can't guarantee it will be safe and secure or will work perfectly all the time. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                                                   </Text>
                                                   <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                   - We do not control what people and others do or say, and we are not responsible for their (or your) actions or conduct (whether online or offline) or content (including unlawful or objectionable content). We also are not responsible for services and features offered by other people or companies, even if you access them through our Service.
                                                   </Text>
                                                   <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                   - Our responsibility for anything that happens on the Service (also called "liability") is limited as much as the law will allow. If there is an issue with our Service, we can't know what all the possible impacts might be. You agree that we won't be liable for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms, even if we know they are possible. This includes when we delete your content, information, or account. Our aggregate liability arising out of or relating to these Terms will not exceed the greater of $100 or the amount you have paid us in the past twelve months.
                                                   </Text>
                                                   <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                                   - You agree to defend (at our request), indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with these Terms or your use of the Service. You will cooperate as required by us in the defense of any claim. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without our prior written consent.
                                                   </Text>
                                            </View>
                             {/* Header */}
                             <Text style={{ marginTop:5, padding:4,}} >
                             Updating These Terms
                            </Text>
                                {/* BODY */}
                                <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                Text we update or change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.
                                        </Text>
                                {/* BODY */}
                                <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                Revised: 03/27/2023
                                </Text>
                                {/* BODY */}
                                <Text style={{ marginTop:5, width:300,padding:4,marginLeft:5}} >
                                AVA Games and Entertainment LLC
                                </Text>
                                </View>

                                </ScrollView>
<TouchableOpacity onPress={()=>{app.dispatch({readEULA:false})}} style={{width:70, borderRadius:7, backgroundColor:"#A80303", display:"flex", justifyContent:"center", alignItems:"center", marginTop:20}}><Text style={{fontSize:20, color:"white"}}>OK</Text></TouchableOpacity>
 
 
 </SafeAreaView>  
 </View>
 );
}
  
};

